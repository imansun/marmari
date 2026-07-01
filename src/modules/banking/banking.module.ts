import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BanksController, BankAccountsController } from './banking.controller';
import { BanksService, BankAccountsService } from './banking.service';
import { Bank } from './entities/bank.entity';
import { BankAccount } from './entities/bank-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bank, BankAccount])],
  controllers: [BanksController, BankAccountsController],
  providers: [BanksService, BankAccountsService],
  exports: [BanksService, BankAccountsService],
})
export class BankingModule {}
