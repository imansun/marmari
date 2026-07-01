import { Entity, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from '../../../database';
import { Account } from './account.entity';

export enum AccountCategory {
  ASSET = 'asset',
  LIABILITY = 'liability',
  EQUITY = 'equity',
  INCOME = 'income',
  EXPENSE = 'expense',
  CONTINGENT = 'contingent',
}

@Entity('account_types', { schema: 'public' })
export class AccountType extends BaseEntity {
  @ApiProperty()
  @Column({ length: 50, unique: true })
  code: string;

  @ApiProperty()
  @Column({ length: 200 })
  name: string;

  @ApiProperty({ enum: AccountCategory })
  @Column({
    type: 'enum',
    enum: AccountCategory,
  })
  categoryType: AccountCategory;

  @ApiProperty()
  @Column({ default: true })
  isCreditable: boolean;

  @OneToMany(() => Account, (account) => account.accountType)
  accounts: Account[];
}
