import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { BOM, BOMStatus } from './entities/bom.entity';
import { BOMItem } from './entities/bom-item.entity';
import { CreateBomDto, UpdateBomDto } from './dto/create-bom.dto';
import { Product } from '../products/entities/product.entity';

@Injectable()
export class BomService extends CrudService<BOM> {
  constructor(
    @InjectRepository(BOM)
    repository: Repository<BOM>,
    @InjectRepository(BOMItem)
    private readonly itemRepository: Repository<BOMItem>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {
    super(repository);
  }

  async createBom(dto: CreateBomDto): Promise<BOM> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) {
      throw new ConflictException('BOM code already exists');
    }

    const product = await this.productRepository.findOne({
      where: { id: dto.productId },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    for (const item of dto.items) {
      const comp = await this.productRepository.findOne({
        where: { id: item.productId },
      });
      if (!comp)
        throw new NotFoundException(`Product ${item.productId} not found`);
    }

    const bom = this.repository.create({
      code: dto.code,
      name: dto.name,
      productId: dto.productId,
      quantity: dto.quantity ?? 1,
      unit: dto.unit,
      status: dto.status ?? BOMStatus.DRAFT,
      description: dto.description,
      isActive: true,
      revision: 1,
    });

    const saved = await this.repository.save(bom);

    const items = dto.items.map((item, idx) =>
      this.itemRepository.create({
        bomId: saved.id,
        productId: item.productId,
        quantity: item.quantity,
        unit: item.unit,
        wastePercent: item.wastePercent ?? 0,
        sortOrder: item.sortOrder ?? idx,
        description: item.description,
      }),
    );

    bom.items = await this.itemRepository.save(items);
    await this.calculateTotalCost(bom);
    return this.findOne(saved.id);
  }

  async updateBom(id: string, dto: UpdateBomDto): Promise<BOM> {
    const bom = await this.findOne(id);
    if (bom.status === BOMStatus.ARCHIVED) {
      throw new BadRequestException('Cannot update an archived BOM');
    }

    if (dto.name !== undefined) bom.name = dto.name;
    if (dto.status !== undefined) bom.status = dto.status;
    if (dto.description !== undefined) bom.description = dto.description;

    if (dto.items !== undefined) {
      await this.itemRepository.softDelete({ bomId: id });

      const items = dto.items.map((item, idx) =>
        this.itemRepository.create({
          bomId: id,
          productId: item.productId,
          quantity: item.quantity,
          unit: item.unit,
          wastePercent: item.wastePercent ?? 0,
          sortOrder: item.sortOrder ?? idx,
          description: item.description,
        }),
      );
      bom.items = await this.itemRepository.save(items);
      await this.calculateTotalCost(bom);
    }

    return this.repository.save(bom);
  }

  async activate(id: string): Promise<BOM> {
    const bom = await this.findOne(id);
    if (bom.status !== BOMStatus.DRAFT) {
      throw new BadRequestException('Only draft BOMs can be activated');
    }
    if (!bom.items || bom.items.length === 0) {
      throw new BadRequestException('Cannot activate a BOM with no items');
    }
    bom.status = BOMStatus.ACTIVE;
    return this.repository.save(bom);
  }

  async deactivate(id: string): Promise<BOM> {
    const bom = await this.findOne(id);
    if (bom.status !== BOMStatus.ACTIVE) {
      throw new BadRequestException('Only active BOMs can be deactivated');
    }
    bom.status = BOMStatus.INACTIVE;
    return this.repository.save(bom);
  }

  async archive(id: string): Promise<BOM> {
    const bom = await this.findOne(id);
    if (bom.status === BOMStatus.ARCHIVED) {
      throw new BadRequestException('BOM is already archived');
    }
    bom.status = BOMStatus.ARCHIVED;
    return this.repository.save(bom);
  }

  async calculateTotalCost(bom: BOM): Promise<void> {
    let total = 0;
    if (bom.items && bom.items.length > 0) {
      for (const item of bom.items) {
        const product = await this.productRepository.findOne({
          where: { id: item.productId },
        });
        const cost = product ? Number(product.purchasePrice) : 0;
        const qty = Number(item.quantity);
        const waste = Number(item.wastePercent) / 100;
        const effectiveQty = qty * (1 + waste);
        item.costShare = cost * effectiveQty;
        total += item.costShare;
      }
      bom.totalCost = total;
      await this.itemRepository.save(bom.items);
    }
    await this.repository.save(bom);
  }

  async getCost(id: string): Promise<{
    totalCost: number;
    items: { productId: string; quantity: number; costShare: number }[];
  }> {
    const bom = await this.findOne(id);
    if (!bom.items || bom.items.length === 0) {
      return { totalCost: 0, items: [] };
    }
    await this.calculateTotalCost(bom);
    const refreshed = await this.findOne(id);
    return {
      totalCost: Number(refreshed.totalCost ?? 0),
      items: refreshed.items.map((i) => ({
        productId: i.productId,
        quantity: Number(i.quantity),
        costShare: Number(i.costShare),
      })),
    };
  }

  async findByProduct(productId: string): Promise<BOM[]> {
    return this.repository.find({
      where: { productId, isActive: true },
      order: { revision: 'DESC' },
    });
  }
}
