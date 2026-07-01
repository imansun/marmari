import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  VouchersController,
  VoucherTypesController,
} from './vouchers.controller';
import { VouchersService, VoucherTypesService } from './vouchers.service';
import { Voucher } from './entities/voucher.entity';
import { VoucherItem } from './entities/voucher-item.entity';
import { VoucherType } from './entities/voucher-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Voucher, VoucherItem, VoucherType])],
  controllers: [VouchersController, VoucherTypesController],
  providers: [VouchersService, VoucherTypesService],
  exports: [VouchersService, VoucherTypesService],
})
export class VouchersModule {}
