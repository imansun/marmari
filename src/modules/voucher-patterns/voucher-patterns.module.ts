import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VoucherPatternsController } from './voucher-patterns.controller';
import { VoucherPatternsService } from './voucher-patterns.service';
import { VoucherPattern } from './entities/voucher-pattern.entity';
import { VoucherPatternItem } from './entities/voucher-pattern-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VoucherPattern, VoucherPatternItem])],
  controllers: [VoucherPatternsController],
  providers: [VoucherPatternsService],
  exports: [VoucherPatternsService],
})
export class VoucherPatternsModule {}
