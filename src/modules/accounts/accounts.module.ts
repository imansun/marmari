import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AccountsController,
  AccountTypesController,
} from './accounts.controller';
import { AccountsService, AccountTypesService } from './accounts.service';
import { Account } from './entities/account.entity';
import { AccountType } from './entities/account-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account, AccountType])],
  controllers: [AccountsController, AccountTypesController],
  providers: [AccountsService, AccountTypesService],
  exports: [AccountsService, AccountTypesService],
})
export class AccountsModule {}
