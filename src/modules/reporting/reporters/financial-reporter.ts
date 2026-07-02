import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, Like } from 'typeorm';
import {
  Voucher,
  VoucherState,
} from '../../../modules/vouchers/entities/voucher.entity';
import { VoucherItem } from '../../../modules/vouchers/entities/voucher-item.entity';
import { Account } from '../../../modules/accounts/entities/account.entity';

export interface FinancialReport {
  title: string;
  period: { from: string; to: string };
  generatedAt: string;
  data: Record<string, unknown>[];
  summary: Record<string, unknown>;
}

@Injectable()
export class FinancialReporter {
  private readonly logger = new Logger(FinancialReporter.name);

  constructor(
    @InjectRepository(Voucher)
    private readonly voucherRepo: Repository<Voucher>,
    @InjectRepository(VoucherItem)
    private readonly itemRepo: Repository<VoucherItem>,
    @InjectRepository(Account)
    private readonly accountRepo: Repository<Account>,
  ) {}

  async trialBalance(
    startDate?: string,
    endDate?: string,
  ): Promise<FinancialReport> {
    const where: Record<string, unknown> = { state: VoucherState.APPROVED };
    if (startDate && endDate) {
      where.date = Between(new Date(startDate), new Date(endDate));
    }

    const accounts = await this.accountRepo.find({ order: { code: 'ASC' } });
    const reportData: Record<string, unknown>[] = [];

    for (const account of accounts) {
      const items = await this.itemRepo.find({
        where: { accountId: account.id, voucher: where },
        relations: { voucher: true },
      });

      const totalDebit = items.reduce((s, i) => s + Number(i.debit || 0), 0);
      const totalCredit = items.reduce((s, i) => s + Number(i.credit || 0), 0);
      const balance = totalDebit - totalCredit;

      reportData.push({
        accountCode: account.code,
        accountName: account.name,
        totalDebit,
        totalCredit,
        balance,
      });
    }

    const totalDebit = reportData.reduce(
      (s, r) => s + (r.totalDebit as number),
      0,
    );
    const totalCredit = reportData.reduce(
      (s, r) => s + (r.totalCredit as number),
      0,
    );

    return {
      title: 'تراز آزمایشی',
      period: { from: startDate || '...', to: endDate || '...' },
      generatedAt: new Date().toISOString(),
      data: reportData,
      summary: {
        totalDebit,
        totalCredit,
        difference: totalDebit - totalCredit,
      },
    };
  }

  async incomeStatement(
    startDate: string,
    endDate: string,
  ): Promise<FinancialReport> {
    const revenueAccounts = await this.accountRepo.find({
      where: { code: Like('4%') },
      order: { code: 'ASC' },
    });
    const expenseAccounts = await this.accountRepo.find({
      where: { code: Like('5%') },
      order: { code: 'ASC' },
    });

    const revenues = await this.getAccountBalances(
      revenueAccounts,
      startDate,
      endDate,
    );
    const expenses = await this.getAccountBalances(
      expenseAccounts,
      startDate,
      endDate,
    );

    const totalRevenue = revenues.reduce(
      (s, r) => s + (r.balance as number),
      0,
    );
    const totalExpense = expenses.reduce(
      (s, r) => s + (r.balance as number),
      0,
    );
    const netIncome = totalRevenue - totalExpense;

    return {
      title: 'صورت سود و زیان',
      period: { from: startDate, to: endDate },
      generatedAt: new Date().toISOString(),
      data: [...revenues, ...expenses],
      summary: { totalRevenue, totalExpense, netIncome },
    };
  }

  private async getAccountBalances(
    accounts: Account[],
    startDate: string,
    endDate: string,
  ): Promise<Record<string, unknown>[]> {
    const result: Record<string, unknown>[] = [];
    for (const account of accounts) {
      const items = await this.itemRepo.find({
        where: {
          accountId: account.id,
          voucher: {
            state: VoucherState.APPROVED,
            date: Between(new Date(startDate), new Date(endDate)),
          },
        },
        relations: { voucher: true },
      });
      const debit = items.reduce((s, i) => s + Number(i.debit || 0), 0);
      const credit = items.reduce((s, i) => s + Number(i.credit || 0), 0);
      result.push({
        accountCode: account.code,
        accountName: account.name,
        debit,
        credit,
        balance: debit - credit,
      });
    }
    return result;
  }
}
