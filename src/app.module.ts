import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { configs } from './config';
import { DatabaseModule } from './database';
import { CoreModule } from './core';
import { CacheModule } from './cache';
import { I18nModule } from './i18n';
import { LoggerModule } from './logger';
import { EventsModule } from './events';
import { MetricsModule } from './metrics';
import { HealthModule } from './health';
import { AuthModule } from './modules/auth';
import { UsersModule } from './modules/users';
import { AccountsModule } from './modules/accounts';
import { VouchersModule } from './modules/vouchers';
import { BankingModule } from './modules/banking';
import { TaxModule } from './modules/tax';
import { ProductsModule } from './modules/products';
import { PartiesModule } from './modules/parties';
import { ChequesModule } from './modules/cheques';
import { TransfersModule } from './modules/transfers';
import { BudgetsModule } from './modules/budgets';
import { CostCentersModule } from './modules/cost-centers';
import { FiscalYearsModule } from './modules/fiscal-years';
import { AccountGroupsModule } from './modules/account-groups';
import { AccountDetailsModule } from './modules/account-details';
import { PettyCashModule } from './modules/petty-cash';
import { BankReconciliationModule } from './modules/bank-reconciliation';
import { GuaranteesModule } from './modules/guarantees';
import { VoucherPatternsModule } from './modules/voucher-patterns';
import { YearEndClosingModule } from './modules/year-end-closing';
import { InventoryModule } from './modules/inventory';
import { PurchaseOrdersModule } from './modules/purchase-orders';
import { SalesOrdersModule } from './modules/sales-orders';
import { ContractsModule } from './modules/contracts';
import { FixedAssetsModule } from './modules/fixed-assets';
import { HrModule } from './modules/hr';
import { PricingModule } from './modules/pricing';
import { AuditModule } from './modules/audit';
import { InvoicingModule } from './modules/invoicing';
import { TreasuryModule } from './modules/treasury';
import { CurrencyModule } from './modules/currency';
import { BomModule } from './modules/bom';
import { CrmModule } from './modules/crm';
import { PosModule } from './modules/pos';
import { SubcontractingModule } from './modules/subcontracting';
import { WorkcentersModule } from './modules/workcenters';
import { WorkordersModule } from './modules/workorders';
import { QualityModule } from './modules/quality';
import { MaintenanceModule } from './modules/maintenance';
import { AttendanceModule } from './modules/attendance';
import { PayrollModule } from './modules/payroll';
import { TrainingModule } from './modules/training';
import { FleetModule } from './modules/fleet';
import { TransportModule } from './modules/transport';
import { ReportsModule } from './modules/reports';
import { DashboardsModule } from './modules/dashboards';
import { FilesModule } from './modules/files';
import { SearchModule } from './modules/search';
import { JobsModule } from './modules/jobs';
import { NotificationsModule } from './modules/notifications';
import { GraphqlModule } from './modules/graphql';
import { IntegrationModule } from './modules/integration';
import { ReportingModule } from './modules/reporting';
import { LegacyModule } from './legacy/legacy.module';
import { SeedService } from './database/seed.service';
import { PermissionsGuard } from './auth/permissions.guard';
import { SchemaInterceptor } from './database/schema.interceptor';
import {
  JwtAuthGuard,
  RolesGuard,
  AllExceptionsFilter,
  TransformInterceptor,
} from './common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: configs,
      envFilePath: '.env',
    }),
    EventsModule,
    DatabaseModule,
    CoreModule,
    CacheModule,
    I18nModule,
    UsersModule,
    AuthModule,
    AccountsModule,
    VouchersModule,
    BankingModule,
    TaxModule,
    ProductsModule,
    PartiesModule,
    ChequesModule,
    TransfersModule,
    BudgetsModule,
    CostCentersModule,
    FiscalYearsModule,
    AccountGroupsModule,
    AccountDetailsModule,
    PettyCashModule,
    BankReconciliationModule,
    GuaranteesModule,
    VoucherPatternsModule,
    YearEndClosingModule,
    InventoryModule,
    PurchaseOrdersModule,
    SalesOrdersModule,
    ContractsModule,
    FixedAssetsModule,
    HrModule,
    PricingModule,
    AuditModule,
    InvoicingModule,
    TreasuryModule,
    CurrencyModule,
    BomModule,
    CrmModule,
    PosModule,
    SubcontractingModule,
    WorkcentersModule,
    WorkordersModule,
    QualityModule,
    MaintenanceModule,
    AttendanceModule,
    PayrollModule,
    TrainingModule,
    FleetModule,
    TransportModule,
    ReportsModule,
    DashboardsModule,
    FilesModule,
    SearchModule,
    JobsModule,
    NotificationsModule,
    GraphqlModule,
    IntegrationModule,
    ReportingModule,
    LegacyModule,
    LoggerModule,
    MetricsModule,
    HealthModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
    { provide: APP_GUARD, useClass: PermissionsGuard },
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
    { provide: APP_INTERCEPTOR, useClass: SchemaInterceptor },
    SeedService,
  ],
})
export class AppModule {}
