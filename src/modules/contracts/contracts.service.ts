import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import {
  Contract,
  ContractItem,
  ContractStatus,
  ContractType,
} from './entities/contract.entity';

@Injectable()
export class ContractsService extends CrudService<Contract> {
  constructor(
    @InjectRepository(Contract)
    repository: Repository<Contract>,
    @InjectRepository(ContractItem)
    private readonly itemRepository: Repository<ContractItem>,
  ) {
    super(repository);
  }

  async createWithItems(dto: {
    contractNumber: string;
    title: string;
    contractType: ContractType;
    partyId: string;
    startDate: Date;
    endDate: Date;
    amount: number;
    status?: ContractStatus;
    terms?: string;
    description?: string;
    items: {
      productId?: string;
      description: string;
      quantity: number;
      unitPrice: number;
    }[];
  }): Promise<Contract> {
    const existing = await this.repository.findOne({
      where: { contractNumber: dto.contractNumber },
    });
    if (existing) throw new ConflictException('Contract number already exists');

    if (new Date(dto.endDate) <= new Date(dto.startDate)) {
      throw new BadRequestException('End date must be after start date');
    }

    const contract = this.repository.create({
      contractNumber: dto.contractNumber,
      title: dto.title,
      contractType: dto.contractType,
      partyId: dto.partyId,
      startDate: dto.startDate,
      endDate: dto.endDate,
      amount: dto.amount,
      status: dto.status ?? ContractStatus.DRAFT,
      terms: dto.terms,
      description: dto.description,
    });
    const saved = await this.repository.save(contract);

    const items = dto.items.map((item) =>
      this.itemRepository.create({
        contractId: saved.id,
        productId: item.productId,
        description: item.description,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalPrice: item.quantity * item.unitPrice,
      }),
    );
    await this.itemRepository.save(items);

    return this.findOne(saved.id);
  }

  async activate(id: string): Promise<Contract> {
    const contract = await this.findOne(id);
    if (contract.status !== ContractStatus.DRAFT) {
      throw new BadRequestException('Only draft contracts can be activated');
    }
    contract.status = ContractStatus.ACTIVE;
    await this.repository.save(contract);
    return this.findOne(contract.id);
  }

  async complete(id: string): Promise<Contract> {
    const contract = await this.findOne(id);
    if (contract.status !== ContractStatus.ACTIVE) {
      throw new BadRequestException('Only active contracts can be completed');
    }
    contract.status = ContractStatus.COMPLETED;
    await this.repository.save(contract);
    return this.findOne(contract.id);
  }

  async terminate(id: string): Promise<Contract> {
    const contract = await this.findOne(id);
    if (
      contract.status === ContractStatus.COMPLETED ||
      contract.status === ContractStatus.CANCELLED
    ) {
      throw new BadRequestException('Cannot terminate this contract');
    }
    contract.status = ContractStatus.TERMINATED;
    await this.repository.save(contract);
    return this.findOne(contract.id);
  }

  async cancel(id: string): Promise<Contract> {
    const contract = await this.findOne(id);
    if (contract.status === ContractStatus.COMPLETED) {
      throw new BadRequestException('Cannot cancel a completed contract');
    }
    contract.status = ContractStatus.CANCELLED;
    await this.repository.save(contract);
    return this.findOne(contract.id);
  }

  async findByParty(partyId: string): Promise<Contract[]> {
    return this.repository.find({
      where: { partyId },
      relations: { party: true, items: { product: true } },
    });
  }

  async findOne(id: string): Promise<Contract> {
    const contract = await this.repository.findOne({
      where: { id },
      relations: { party: true, items: { product: true } },
    });
    if (!contract) throw new NotFoundException('Contract not found');
    return contract;
  }
}
