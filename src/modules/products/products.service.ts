import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual } from 'typeorm';
import { CrudService } from '../../core';
import { Product, ProductState } from './entities/product.entity';

@Injectable()
export class ProductsService extends CrudService<Product> {
  constructor(
    @InjectRepository(Product)
    repository: Repository<Product>,
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
}
