import { Injectable, BadRequestException } from '@nestjs/common';
import { FinancialReporter } from './reporters/financial-reporter';
import { InventoryReporter } from './reporters/inventory-reporter';
import { InvoicingReporter } from './reporters/invoicing-reporter';
import { HrReporter } from './reporters/hr-reporter';
import { ReportRequestDto } from './dto/report-request.dto';

@Injectable()
export class ReportingService {
  constructor(
    private readonly financial: FinancialReporter,
    private readonly inventory: InventoryReporter,
    private readonly invoicing: InvoicingReporter,
    private readonly hr: HrReporter,
  ) {}

  async generate(dto: ReportRequestDto): Promise<Record<string, any>> {
    switch (dto.reportType) {
      case 'financial':
        return this.generateFinancial(dto);
      case 'inventory':
        return this.generateInventory(dto);
      case 'invoicing':
        return this.generateInvoicing(dto);
      case 'hr':
        return this.generateHr(dto);
      default:
        throw new BadRequestException(`Unknown report type: ${dto.reportType}`);
    }
  }

  private async generateFinancial(
    dto: ReportRequestDto,
  ): Promise<Record<string, any>> {
    switch (dto.reportName) {
      case 'trial-balance':
        return this.financial.trialBalance(dto.startDate, dto.endDate);
      case 'income-statement':
        if (!dto.startDate || !dto.endDate) {
          throw new BadRequestException(
            'startDate and endDate are required for income statement',
          );
        }
        return this.financial.incomeStatement(dto.startDate, dto.endDate);
      default:
        throw new BadRequestException(
          `Unknown financial report: ${dto.reportName}`,
        );
    }
  }

  private async generateInventory(
    dto: ReportRequestDto,
  ): Promise<Record<string, any>> {
    switch (dto.reportName) {
      case 'stock-status':
        return this.inventory.stockStatus();
      case 'low-stock':
        return this.inventory.lowStockReport();
      default:
        throw new BadRequestException(
          `Unknown inventory report: ${dto.reportName}`,
        );
    }
  }

  private async generateInvoicing(
    dto: ReportRequestDto,
  ): Promise<Record<string, any>> {
    switch (dto.reportName) {
      case 'sales':
        return this.invoicing.salesReport(dto.startDate, dto.endDate);
      case 'overdue':
        return this.invoicing.overdueReport();
      default:
        throw new BadRequestException(
          `Unknown invoicing report: ${dto.reportName}`,
        );
    }
  }

  private async generateHr(
    dto: ReportRequestDto,
  ): Promise<Record<string, any>> {
    switch (dto.reportName) {
      case 'employee-list':
        return this.hr.employeeList(dto.entityId);
      case 'department-summary':
        return this.hr.departmentSummary();
      default:
        throw new BadRequestException(`Unknown HR report: ${dto.reportName}`);
    }
  }
}
