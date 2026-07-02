import {
  Repository,
  FindOptionsWhere,
  FindManyOptions,
  ObjectLiteral,
} from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { PaginationDto, PaginatedResult } from '../common';

export abstract class CrudService<T extends ObjectLiteral> {
  constructor(protected readonly repository: Repository<T>) {}

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  async findOne(id: string | number): Promise<T> {
    const entity = await this.repository.findOne({
      where: { id } as unknown as FindOptionsWhere<T>,
    });
    if (!entity) throw new NotFoundException('Entity not found');
    return entity;
  }

  async findOneBy(where: FindOptionsWhere<T>): Promise<T> {
    const entity = await this.repository.findOne({ where });
    if (!entity) throw new NotFoundException('Entity not found');
    return entity;
  }

  async create(dto: Partial<T>): Promise<T> {
    const entity = this.repository.create(dto as T);
    return this.repository.save(entity);
  }

  async update(id: string | number, dto: Partial<T>): Promise<T> {
    await this.repository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string | number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Entity not found');
  }

  async softDelete(id: string | number): Promise<void> {
    const result = await this.repository.softDelete(id);
    if (result.affected === 0) throw new NotFoundException('Entity not found');
  }

  async paginate(
    pagination: PaginationDto,
    options?: FindManyOptions<T>,
  ): Promise<PaginatedResult<T>> {
    const page = pagination.page ?? 1;
    const limit = pagination.limit ?? 20;
    const skip = (page - 1) * limit;

    const queryOptions: FindManyOptions<T> = {
      skip,
      take: limit,
      ...options,
    };

    if (pagination.sortBy) {
      queryOptions.order = {
        [pagination.sortBy]: pagination.sortOrder || 'DESC',
      } as any;
    }

    const [data, total] = await this.repository.findAndCount(queryOptions);

    const safeLimit = limit || 20;
    const totalPages = Math.ceil(total / safeLimit);

    return {
      data,
      meta: {
        page,
        limit: safeLimit,
        total,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  getRepository(): Repository<T> {
    return this.repository;
  }
}
