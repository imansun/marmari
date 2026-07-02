import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { LegacyProduct } from '../entities';

@Injectable()
export class LegacyProductService {
  constructor(
    @InjectRepository(LegacyProduct)
    private readonly repo: Repository<LegacyProduct>,
  ) {}

  async findAll(page = 1, limit = 20) {
    const [data, total] = await this.repo.findAndCount({
      order: { productID: 'ASC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, page, limit };
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ productID: id });
  }

  async findByName(name: string) {
    return this.repo.find({
      where: { name: Like(`%${name}%`) },
      order: { productID: 'ASC' },
    });
  }
}
