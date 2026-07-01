import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { PriceList, PriceListItem } from './entities/price-list.entity';

@Injectable()
export class PriceListsService extends CrudService<PriceList> {
  constructor(
    @InjectRepository(PriceList)
    repository: Repository<PriceList>,
    @InjectRepository(PriceListItem)
    private readonly itemRepository: Repository<PriceListItem>,
  ) {
    super(repository);
  }

  async createWithItems(dto: {
    code: string;
    name: string;
    description?: string;
    currency?: string;
    isActive?: boolean;
    effectiveFrom: Date;
    effectiveTo?: Date;
    items: {
      productId: string;
      unitPrice: number;
      discountPercent?: number;
      discountAmount?: number;
    }[];
  }): Promise<PriceList> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Price list code already exists');

    const priceList = this.repository.create({
      code: dto.code,
      name: dto.name,
      description: dto.description,
      currency: dto.currency ?? 'IRR',
      isActive: dto.isActive ?? true,
      effectiveFrom: dto.effectiveFrom,
      effectiveTo: dto.effectiveTo,
    });
    const saved = await this.repository.save(priceList);

    const items = dto.items.map((item) => {
      const discountPercent = item.discountPercent ?? 0;
      const discountAmount = item.discountAmount ?? 0;
      const afterPercentDiscount = item.unitPrice * (1 - discountPercent / 100);
      const finalPrice = Math.max(0, afterPercentDiscount - discountAmount);

      return this.itemRepository.create({
        priceListId: saved.id,
        productId: item.productId,
        unitPrice: item.unitPrice,
        discountPercent,
        discountAmount,
        finalPrice,
      });
    });
    await this.itemRepository.save(items);

    return this.findOne(saved.id);
  }

  async findActive(): Promise<PriceList[]> {
    return this.repository.find({
      where: { isActive: true },
      relations: { items: true },
    });
  }

  async findOne(id: string): Promise<PriceList> {
    const priceList = await this.repository.findOne({
      where: { id },
      relations: { items: true },
    });
    if (!priceList) throw new NotFoundException('Price list not found');
    return priceList;
  }
}
