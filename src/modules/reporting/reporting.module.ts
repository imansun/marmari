import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportingController } from './reporting.controller';
import { ReportingService } from './reporting.service';
import { FinancialReporter } from './reporters/financial-reporter';
import { InventoryReporter } from './reporters/inventory-reporter';
import { InvoicingReporter } from './reporters/invoicing-reporter';
import { HrReporter } from './reporters/hr-reporter';
import { Voucher } from '../vouchers/entities/voucher.entity';
import { VoucherItem } from '../vouchers/entities/voucher-item.entity';
import { Account } from '../accounts/entities/account.entity';
import { Product } from '../products/entities/product.entity';
import { Invoice, InvoiceItem } from '../invoicing/entities/invoice.entity';
import { Employee } from '../hr/entities/employee.entity';
import { Department } from '../hr/entities/department.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Voucher,
      VoucherItem,
      Account,
      Product,
      Invoice,
      InvoiceItem,
      Employee,
      Department,
    ]),
  ],
  controllers: [ReportingController],
  providers: [
    ReportingService,
    FinancialReporter,
    InventoryReporter,
    InvoicingReporter,
    HrReporter,
  ],
  exports: [ReportingService],
})
export class ReportingModule {}
