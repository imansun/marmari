import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Product,
  ProductState,
} from '../../../modules/products/entities/product.entity';

export interface InventoryReport {
  title: string;
  generatedAt: string;
  data: Record<string, unknown>[];
  summary: Record<string, unknown>;
}

@Injectable()
export class InventoryReporter {
  private readonly logger = new Logger(InventoryReporter.name);

  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async stockStatus(): Promise<InventoryReport> {
    const products = await this.productRepo.find({
      order: { code: 'ASC' },
    });

    const data = products.map((p) => ({
      code: p.code,
      name: p.name,
      stockQuantity: p.stockQuantity,
      unit: p.unit,
      state: p.state,
    }));

    const totalItems = data.length;
    const totalStock = data.reduce(
      (s, r) => s + Number(r.stockQuantity || 0),
      0,
    );
    const lowStockItems = data.filter((r) => r.stockQuantity <= 0);

    return {
      title: 'گزارش موجودی انبار',
      generatedAt: new Date().toISOString(),
      data,
      summary: {
        totalItems,
        totalStock,
        lowStockCount: lowStockItems.length,
        activeItems: data.filter((r) => r.state === ProductState.ACTIVE).length,
      },
    };
  }

  async lowStockReport(): Promise<InventoryReport> {
    const products = await this.productRepo.find({
      where: { stockQuantity: 0 },
      order: { code: 'ASC' },
    });

    return {
      title: 'گزارش کالاهای بدون موجودی',
      generatedAt: new Date().toISOString(),
      data: products.map((p) => ({
        code: p.code,
        name: p.name,
        stockQuantity: p.stockQuantity,
        unit: p.unit,
      })),
      summary: { count: products.length },
    };
  }
}
