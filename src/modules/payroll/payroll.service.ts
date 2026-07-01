import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { CrudService } from '../../core';
import {
  PayrollPeriod,
  PayrollPeriodStatus,
} from './entities/payroll-period.entity';
import { PayrollItem } from './entities/payroll-item.entity';
import { Employee } from '../hr/entities/employee.entity';

@Injectable()
export class PayrollService extends CrudService<PayrollPeriod> {
  constructor(
    @InjectRepository(PayrollPeriod)
    repository: Repository<PayrollPeriod>,
    @InjectRepository(PayrollItem)
    private readonly itemRepository: Repository<PayrollItem>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    private readonly dataSource: DataSource,
  ) {
    super(repository);
  }

  async createPeriod(dto: {
    code: string;
    name: string;
    startDate: string;
    endDate: string;
    items: Array<{
      employeeId: string;
      baseSalary: number;
      allowances?: number;
      overtimePay?: number;
      bonus?: number;
      deductions?: number;
      tax?: number;
      insurance?: number;
      loanDeduction?: number;
      notes?: string;
    }>;
  }): Promise<PayrollPeriod> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing)
      throw new ConflictException('Payroll period code already exists');

    for (const item of dto.items) {
      const emp = await this.employeeRepository.findOne({
        where: { id: item.employeeId },
      });
      if (!emp)
        throw new BadRequestException(`Employee ${item.employeeId} not found`);
    }

    const items = dto.items.map((item) => {
      const totalAdditions =
        item.baseSalary +
        (item.allowances ?? 0) +
        (item.overtimePay ?? 0) +
        (item.bonus ?? 0);
      const totalDeductions =
        (item.deductions ?? 0) +
        (item.tax ?? 0) +
        (item.insurance ?? 0) +
        (item.loanDeduction ?? 0);
      const netPay = totalAdditions - totalDeductions;

      return this.itemRepository.create({
        employeeId: item.employeeId,
        baseSalary: item.baseSalary,
        allowances: item.allowances ?? 0,
        overtimePay: item.overtimePay ?? 0,
        bonus: item.bonus ?? 0,
        deductions: item.deductions ?? 0,
        tax: item.tax ?? 0,
        insurance: item.insurance ?? 0,
        loanDeduction: item.loanDeduction ?? 0,
        netPay: Math.max(0, netPay),
        notes: item.notes,
      });
    });

    const totalPayroll = items.reduce((s, i) => s + Number(i.netPay), 0);

    const period = this.repository.create({
      code: dto.code,
      name: dto.name,
      startDate: dto.startDate,
      endDate: dto.endDate,
      status: PayrollPeriodStatus.DRAFT,
      totalPayroll,
      items,
    });

    return this.repository.save(period);
  }

  async process(id: string): Promise<PayrollPeriod> {
    const period = await this.findOne(id);
    if (period.status !== PayrollPeriodStatus.DRAFT) {
      throw new BadRequestException('Only draft periods can be processed');
    }
    period.status = PayrollPeriodStatus.PROCESSED;
    period.processedAt = new Date();
    return this.repository.save(period);
  }

  async markPaid(id: string): Promise<PayrollPeriod> {
    const period = await this.findOne(id);
    if (period.status !== PayrollPeriodStatus.PROCESSED) {
      throw new BadRequestException(
        'Only processed periods can be marked as paid',
      );
    }
    period.status = PayrollPeriodStatus.PAID;
    period.paidAt = new Date();
    return this.repository.save(period);
  }

  async cancel(id: string): Promise<PayrollPeriod> {
    const period = await this.findOne(id);
    if (period.status === PayrollPeriodStatus.PAID) {
      throw new BadRequestException('Cannot cancel a paid period');
    }
    period.status = PayrollPeriodStatus.CANCELLED;
    return this.repository.save(period);
  }

  async getByEmployee(employeeId: string): Promise<PayrollItem[]> {
    return this.itemRepository.find({
      where: { employeeId },
      order: { createdAt: 'DESC' },
    });
  }
}
