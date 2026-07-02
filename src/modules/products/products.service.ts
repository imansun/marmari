import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual } from 'typeorm';
import { CrudService } from '../../core';
import { EventsService, DomainEvents } from '../../events';
import { Product, ProductState } from './entities/product.entity';

@Injectable()
export class ProductsService extends CrudService<Product> {
  constructor(
    @InjectRepository(Product)
    repository: Repository<Product>,
    private readonly events: EventsService,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<Product | null> {
    return this.repository.findOne({ where: { code } });
  }

  async getLowStock(): Promise<Product[]> {
    return this.repository.find({
      where: {
        state: ProductState.ACTIVE,
        stockQuantity: LessThanOrEqual(0),
      },
    });
  }

  async adjustStock(id: string, quantity: number): Promise<Product> {
    const product = await this.findOne(id);
    product.stockQuantity = (product.stockQuantity || 0) + quantity;
    const saved = await this.repository.save(product);
    if ((saved.stockQuantity || 0) <= 0) {
      this.events.emit(DomainEvents.PRODUCT_LOW_STOCK, {
        type: DomainEvents.PRODUCT_LOW_STOCK,
        entityId: id,
        data: { code: saved.code, name: saved.name, stockQuantity: saved.stockQuantity },
      });
    }
    return saved;
  }

  async getStockSummary(): Promise<{ totalProducts: number; totalStock: number; lowStockCount: number; outOfStockCount: number }> {
    const all = await this.repository.find({ where: { state: ProductState.ACTIVE } });
    const totalStock = all.reduce((s, p) => s + Number(p.stockQuantity || 0), 0);
    const lowStockCount = all.filter((p) => Number(p.stockQuantity || 0) > 0 && Number(p.stockQuantity || 0) <= 5).length;
    const outOfStockCount = all.filter((p) => Number(p.stockQuantity || 0) <= 0).length;
    return { totalProducts: all.length, totalStock, lowStockCount, outOfStockCount };
  }
}
