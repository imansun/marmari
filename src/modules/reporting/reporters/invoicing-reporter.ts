import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, LessThan } from 'typeorm';
import {
  Invoice,
  InvoiceStatus,
  InvoiceType,
} from '../../../modules/invoicing/entities/invoice.entity';
import { InvoiceItem } from '../../../modules/invoicing/entities/invoice.entity';

export interface InvoiceReport {
  title: string;
  generatedAt: string;
  data: Record<string, unknown>[];
  summary: Record<string, unknown>;
}

@Injectable()
export class InvoicingReporter {
  private readonly logger = new Logger(InvoicingReporter.name);

  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepo: Repository<Invoice>,
    @InjectRepository(InvoiceItem)
    private readonly itemRepo: Repository<InvoiceItem>,
  ) {}

  async salesReport(
    startDate?: string,
    endDate?: string,
  ): Promise<InvoiceReport> {
    const where: Record<string, unknown> = {
      invoiceType: InvoiceType.SALES,
      status: InvoiceStatus.PAID,
    };
    if (startDate && endDate) {
      where.date = Between(new Date(startDate), new Date(endDate));
    }

    const invoices = await this.invoiceRepo.find({
      where,
      relations: { party: true },
      order: { date: 'ASC' },
    });

    const data = invoices.map((i) => ({
      invoiceNumber: i.invoiceNumber,
      date: i.date,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      party: (i.party as any)?.name,
      totalAmount: i.totalAmount,
      discountAmount: i.discountAmount,
      taxAmount: i.taxAmount,
      finalAmount: i.finalAmount,
    }));

    const totalSales = data.reduce((s, r) => s + Number(r.finalAmount), 0);
    const totalDiscount = data.reduce(
      (s, r) => s + Number(r.discountAmount),
      0,
    );
    const totalTax = data.reduce((s, r) => s + Number(r.taxAmount), 0);

    return {
      title: 'گزارش فروش',
      generatedAt: new Date().toISOString(),
      data,
      summary: {
        invoiceCount: invoices.length,
        totalSales,
        totalDiscount,
        totalTax,
      },
    };
  }

  async overdueReport(): Promise<InvoiceReport> {
    const now = new Date();
    const invoices = await this.invoiceRepo.find({
      where: {
        status: InvoiceStatus.ISSUED,
        dueDate: LessThan(now),
      },
      relations: { party: true },
      order: { dueDate: 'ASC' },
    });

    const data = invoices.map((i) => ({
      invoiceNumber: i.invoiceNumber,
      date: i.date,
      dueDate: i.dueDate,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      party: (i.party as any)?.name,
      finalAmount: i.finalAmount,
      overdueDays: Math.floor(
        (now.getTime() - new Date(i.dueDate!).getTime()) /
          (1000 * 60 * 60 * 24),
      ),
    }));

    const totalOverdue = data.reduce((s, r) => s + Number(r.finalAmount), 0);

    return {
      title: 'گزارش اسناد سررسید گذشته',
      generatedAt: new Date().toISOString(),
      data,
      summary: { overdueCount: invoices.length, totalOverdue },
    };
  }
}
