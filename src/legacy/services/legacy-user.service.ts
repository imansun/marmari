import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { LegacyUser } from '../entities';

@Injectable()
export class LegacyUserService {
  constructor(
    @InjectRepository(LegacyUser)
    private readonly repo: Repository<LegacyUser>,
  ) {}

  async findAll(page = 1, limit = 20) {
    const [data, total] = await this.repo.findAndCount({
      order: { userID: 'ASC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, page, limit };
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ userID: id });
  }

  async findByName(name: string) {
    return this.repo.findBy({ name: Like(`%${name}%`) });
  }
}
