import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountDetailsController } from './account-details.controller';
import { AccountDetailsService } from './account-details.service';
import { AccountDetail } from './entities/account-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountDetail])],
  controllers: [AccountDetailsController],
  providers: [AccountDetailsService],
  exports: [AccountDetailsService],
})
export class AccountDetailsModule {}
