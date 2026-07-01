import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreasuryController } from './treasury.controller';
import { TreasuryService } from './treasury.service';
import { Treasury } from './entities/treasury.entity';
import { TreasuryTransaction } from './entities/treasury-transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Treasury, TreasuryTransaction])],
  controllers: [TreasuryController],
  providers: [TreasuryService],
  exports: [TreasuryService],
})
export class TreasuryModule {}
