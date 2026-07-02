import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Employee,
  EmployeeStatus,
} from '../../../modules/hr/entities/employee.entity';
import { Department } from '../../../modules/hr/entities/department.entity';

export interface HrReport {
  title: string;
  generatedAt: string;
  data: Record<string, unknown>[];
  summary: Record<string, unknown>;
}

@Injectable()
export class HrReporter {
  private readonly logger = new Logger(HrReporter.name);

  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
    @InjectRepository(Department)
    private readonly departmentRepo: Repository<Department>,
  ) {}

  async employeeList(departmentId?: string): Promise<HrReport> {
    const where: Record<string, unknown> = {};
    if (departmentId) where.departmentId = departmentId;

    const employees = await this.employeeRepo.find({
      where,
      relations: { department: true },
      order: { lastName: 'ASC', firstName: 'ASC' },
    });

    const data = employees.map((e) => ({
      employeeNumber: e.employeeNumber,
      fullName: `${e.firstName} ${e.lastName}`,
      position: e.position,
      department: e.department?.name,
      status: e.status,
      hireDate: e.hireDate,
    }));

    const activeCount = employees.filter(
      (e) => e.status === EmployeeStatus.ACTIVE,
    ).length;
    const terminatedCount = employees.filter(
      (e) => e.status === EmployeeStatus.TERMINATED,
    ).length;

    return {
      title: 'لیست پرسنل',
      generatedAt: new Date().toISOString(),
      data,
      summary: {
        total: employees.length,
        active: activeCount,
        terminated: terminatedCount,
      },
    };
  }

  async departmentSummary(): Promise<HrReport> {
    const departments = await this.departmentRepo.find();
    const data: Record<string, unknown>[] = [];

    for (const dept of departments) {
      const count = await this.employeeRepo.count({
        where: { departmentId: dept.id },
      });
      data.push({ code: dept.code, name: dept.name, employeeCount: count });
    }

    const totalEmployees = data.reduce(
      (s, r) => s + (r.employeeCount as number),
      0,
    );

    return {
      title: 'خلاصه دپارتمان‌ها',
      generatedAt: new Date().toISOString(),
      data,
      summary: { departmentCount: departments.length, totalEmployees },
    };
  }
}
