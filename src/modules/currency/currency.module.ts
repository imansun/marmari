import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrenciesController } from './currency.controller';
import { CurrenciesService } from './currency.service';
import { Currency, CurrencyRate } from './entities/currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Currency, CurrencyRate])],
  controllers: [CurrenciesController],
  providers: [CurrenciesService],
  exports: [CurrenciesService],
})
export class CurrencyModule {}
