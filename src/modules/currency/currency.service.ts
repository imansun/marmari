import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { Currency, CurrencyRate } from './entities/currency.entity';

@Injectable()
export class CurrenciesService extends CrudService<Currency> {
  constructor(
    @InjectRepository(Currency)
    repository: Repository<Currency>,
    @InjectRepository(CurrencyRate)
    private readonly rateRepository: Repository<CurrencyRate>,
  ) {
    super(repository);
  }

  async create(dto: {
    code: string;
    name: string;
    symbol: string;
    exchangeRate?: number;
    isBase?: boolean;
    isActive?: boolean;
  }): Promise<Currency> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Currency code already exists');

    if (dto.isBase) {
      await this.repository.update({}, { isBase: false });
    }

    return this.repository.save(this.repository.create(dto));
  }

  async setBase(id: string): Promise<Currency> {
    const currency = await this.findOne(id);
    await this.repository.update({}, { isBase: false });
    currency.isBase = true;
    currency.exchangeRate = 1;
    return this.repository.save(currency);
  }

  async updateRate(id: string, rate: number): Promise<Currency> {
    const currency = await this.findOne(id);
    if (currency.isBase) {
      throw new ConflictException('Cannot change rate of base currency');
    }
    currency.exchangeRate = rate;
    await this.repository.save(currency);

    await this.rateRepository.save(
      this.rateRepository.create({ currencyId: id, rate, date: new Date() }),
    );

    return this.findOne(id);
  }

  async getRates(currencyId: string): Promise<CurrencyRate[]> {
    return this.rateRepository.find({
      where: { currencyId },
      order: { date: 'DESC' },
      take: 100,
    });
  }
}
