import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import {
  ReportDefinition,
  ReportCategory,
} from './entities/report-definition.entity';
import {
  ReportExecution,
  ExecutionStatus,
} from './entities/report-execution.entity';
import {
  CreateReportDefinitionDto,
  ExecuteReportDto,
} from './dto/create-report-definition.dto';

@Injectable()
export class ReportsService extends CrudService<ReportDefinition> {
  constructor(
    @InjectRepository(ReportDefinition)
    private readonly definitionRepository: Repository<ReportDefinition>,
    @InjectRepository(ReportExecution)
    private readonly executionRepository: Repository<ReportExecution>,
  ) {
    super(definitionRepository);
  }

  async createDefinition(
    dto: CreateReportDefinitionDto,
  ): Promise<ReportDefinition> {
    return this.definitionRepository.save(
      this.definitionRepository.create(
        dto as unknown as Partial<ReportDefinition>,
      ),
    );
  }

  async findByCategory(category: ReportCategory): Promise<ReportDefinition[]> {
    return this.definitionRepository.find({
      where: { category, isActive: true },
      order: { name: 'ASC' },
    });
  }

  async execute(
    id: string,
    dto: ExecuteReportDto,
    userId: string,
  ): Promise<ReportExecution> {
    const definition = await this.findOne(id);
    const startTime = Date.now();

    const execution = this.executionRepository.create({
      reportId: id,
      executedById: userId,
      status: ExecutionStatus.RUNNING,
      parameters: dto.parameters ?? {},
    });
    const saved = await this.executionRepository.save(execution);

    try {
      const result = await this.runReport(definition, dto.parameters ?? {});
      saved.result = result;
      saved.rowCount = result.length;
      saved.status = ExecutionStatus.DONE;
      saved.duration = Date.now() - startTime;
    } catch (err: unknown) {
      saved.status = ExecutionStatus.FAILED;
      saved.error = err instanceof Error ? err.message : 'Unknown error';
      saved.duration = Date.now() - startTime;
    }

    return this.executionRepository.save(saved);
  }

  private async runReport(
    definition: ReportDefinition,
    parameters: Record<string, unknown>,
  ): Promise<Record<string, unknown>[]> {
    switch (definition.code) {
      case 'trial-balance':
        return this.trialBalance(parameters);
      case 'profit-loss':
        return this.profitLoss();
      case 'balance-sheet':
        return this.balanceSheet();
      case 'sales-summary':
        return this.salesSummary(parameters);
      case 'purchase-summary':
        return this.purchaseSummary(parameters);
      case 'inventory-status':
        return this.inventoryStatus();
      case 'customer-aging':
        return this.customerAging();
      case 'account-balances':
        return this.accountBalances(parameters);
      case 'vouchers-by-date':
        return this.vouchersByDate(parameters);
      case 'product-stock':
        return this.productStock();
      default:
        return [];
    }
  }

  private async query(
    sql: string,
    params?: unknown[],
  ): Promise<Record<string, unknown>[]> {
    return await this.definitionRepository.manager.query(sql, params);
  }

  private async trialBalance(
    parameters: Record<string, unknown>,
  ): Promise<Record<string, unknown>[]> {
    let sql = `SELECT a.code, a.name,
      COALESCE(SUM(CASE WHEN vi.debit > 0 THEN vi.debit ELSE 0 END), 0) AS total_debit,
      COALESCE(SUM(CASE WHEN vi.credit > 0 THEN vi.credit ELSE 0 END), 0) AS total_credit
      FROM accounts a
      LEFT JOIN voucher_items vi ON vi.account_id = a.id`;
    const params: unknown[] = [];
    if (parameters.toDate) {
      sql += ' WHERE vi.created_at <= $1';
      params.push(new Date(parameters.toDate as string));
    }
    sql += ' GROUP BY a.id, a.code, a.name ORDER BY a.code';
    return this.query(sql, params);
  }

  private async profitLoss(): Promise<Record<string, unknown>[]> {
    return this.query(`SELECT a.name AS account_name, a.code AS account_code,
      SUM(vi.debit) - SUM(vi.credit) AS balance
      FROM accounts a
      JOIN account_types at ON at.id = a."accountTypeId"
      JOIN voucher_items vi ON vi.account_id = a.id
      WHERE at.name IN ('\u062F\u0631\u0622\u0645\u062F', '\u0647\u0632\u06CC\u0646\u0647', 'income', 'expense', 'Revenue', 'Expense')
      GROUP BY a.id, a.name, a.code ORDER BY a.code`);
  }

  private async balanceSheet(): Promise<Record<string, unknown>[]> {
    return this.query(`SELECT a.name AS account_name, a.code AS account_code,
      SUM(vi.debit) AS total_debit, SUM(vi.credit) AS total_credit,
      SUM(vi.debit) - SUM(vi.credit) AS balance
      FROM accounts a
      JOIN account_types at ON at.id = a."accountTypeId"
      JOIN voucher_items vi ON vi.account_id = a.id
      WHERE at.name NOT IN ('\u062F\u0631\u0622\u0645\u062F', '\u0647\u0632\u06CC\u0646\u0647', 'income', 'expense', 'Revenue', 'Expense')
      GROUP BY a.id, a.name, a.code ORDER BY a.code`);
  }

  private async salesSummary(
    parameters: Record<string, unknown>,
  ): Promise<Record<string, unknown>[]> {
    const params: unknown[] = [];
    const filters: string[] = [];
    if (parameters.fromDate) {
      params.push(parameters.fromDate);
      filters.push(`so.created_at >= $${params.length}`);
    }
    if (parameters.toDate) {
      params.push(parameters.toDate);
      filters.push(`so.created_at <= $${params.length}`);
    }
    const where = filters.length ? 'WHERE ' + filters.join(' AND ') : '';
    return this.query(
      `SELECT so.id, so.code, so.date, so.status, so.total_amount, so.paid_amount, so.balance
      FROM sales_orders so ${where} ORDER BY so.date DESC`,
      params,
    );
  }

  private async purchaseSummary(
    parameters: Record<string, unknown>,
  ): Promise<Record<string, unknown>[]> {
    const params: unknown[] = [];
    const filters: string[] = [];
    if (parameters.fromDate) {
      params.push(parameters.fromDate);
      filters.push(`po.created_at >= $${params.length}`);
    }
    if (parameters.toDate) {
      params.push(parameters.toDate);
      filters.push(`po.created_at <= $${params.length}`);
    }
    const where = filters.length ? 'WHERE ' + filters.join(' AND ') : '';
    return this.query(
      `SELECT po.id, po.code, po.date, po.status, po.total_amount
      FROM purchase_orders po ${where} ORDER BY po.date DESC`,
      params,
    );
  }

  private async inventoryStatus(): Promise<Record<string, unknown>[]> {
    return this.query(`SELECT p.id, p.code, p.name,
      COALESCE(SUM(i.quantity), 0) AS total_quantity,
      p.min_stock, p.max_stock,
      CASE WHEN COALESCE(SUM(i.quantity), 0) <= p.min_stock THEN 'low'
           WHEN COALESCE(SUM(i.quantity), 0) >= p.max_stock THEN 'excess'
           ELSE 'normal' END AS stock_status
      FROM products p LEFT JOIN inventory i ON i.product_id = p.id
      GROUP BY p.id, p.code, p.name, p.min_stock, p.max_stock ORDER BY p.code`);
  }

  private async customerAging(): Promise<Record<string, unknown>[]> {
    return this.query(`SELECT p.id, p.name, p.code,
      SUM(so.balance) AS total_balance, MAX(so.date) AS last_invoice_date
      FROM parties p JOIN sales_orders so ON so.party_id = p.id
      WHERE so.balance > 0
      GROUP BY p.id, p.name, p.code ORDER BY last_invoice_date ASC`);
  }

  private async accountBalances(
    parameters: Record<string, unknown>,
  ): Promise<Record<string, unknown>[]> {
    const params: unknown[] = [];
    let whereClause = '';
    if (parameters.accountTypeId) {
      params.push(parameters.accountTypeId);
      whereClause = 'WHERE a."accountTypeId" = $1';
    }
    return this.query(
      `SELECT a.code, a.name, a."accountTypeId",
      COALESCE(SUM(vi.debit), 0) AS total_debit,
      COALESCE(SUM(vi.credit), 0) AS total_credit,
      COALESCE(SUM(vi.debit), 0) - COALESCE(SUM(vi.credit), 0) AS balance
      FROM accounts a LEFT JOIN voucher_items vi ON vi.account_id = a.id
      ${whereClause}
      GROUP BY a.id, a.code, a.name, a."accountTypeId" ORDER BY a.code`,
      params,
    );
  }

  private async vouchersByDate(
    parameters: Record<string, unknown>,
  ): Promise<Record<string, unknown>[]> {
    const params: unknown[] = [];
    const filters: string[] = [];
    if (parameters.fromDate) {
      params.push(parameters.fromDate);
      filters.push(`v.date >= $${params.length}`);
    }
    if (parameters.toDate) {
      params.push(parameters.toDate);
      filters.push(`v.date <= $${params.length}`);
    }
    const where = filters.length ? 'WHERE ' + filters.join(' AND ') : '';
    return this.query(
      `SELECT v.id, v.code, v.date, v.description, v.status, v.created_by_id
      FROM vouchers v ${where} ORDER BY v.date DESC`,
      params,
    );
  }

  private async productStock(): Promise<Record<string, unknown>[]> {
    return this.query(`SELECT p.code, p.name, p.unit,
      COALESCE(SUM(i.quantity), 0) AS stock, p.min_stock, p.max_stock
      FROM products p LEFT JOIN inventory i ON i.product_id = p.id
      GROUP BY p.id, p.code, p.name, p.unit, p.min_stock, p.max_stock ORDER BY p.code`);
  }

  async findExecutions(reportId: string): Promise<ReportExecution[]> {
    return this.executionRepository.find({
      where: { reportId },
      order: { executedAt: 'DESC' },
      take: 50,
    });
  }
}
