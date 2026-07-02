import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LegacyParty } from '../entities';

@Injectable()
export class LegacyPartyService {
  constructor(
    @InjectRepository(LegacyParty)
    private readonly repo: Repository<LegacyParty>,
  ) {}

  async findAll(page = 1, limit = 20) {
    const [data, total] = await this.repo.findAndCount({
      order: { partyID: 'ASC' },
      skip: (page - 1) * limit,
      take: limit,
    });
    return { data, total, page, limit };
  }

  async findOne(id: number) {
    return this.repo.findOneBy({ partyID: id });
  }

  async findByMobile(mobile: string) {
    return this.repo.findOneBy({ mobile });
  }

  async findByNationalId(nationalId: string) {
    return this.repo.findOneBy({ nationalID: nationalId });
  }
}
