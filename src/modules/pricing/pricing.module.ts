import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceListsController } from './pricing.controller';
import { PriceListsService } from './pricing.service';
import { PriceList, PriceListItem } from './entities/price-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PriceList, PriceListItem])],
  controllers: [PriceListsController],
  providers: [PriceListsService],
  exports: [PriceListsService],
})
export class PricingModule {}
