import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { EventsService, DomainEvents } from '../../events';
import { Department } from './entities/department.entity';
import {
  Employee,
  EmployeeStatus,
  EmploymentType,
} from './entities/employee.entity';

@Injectable()
export class DepartmentsService extends CrudService<Department> {
  constructor(
    @InjectRepository(Department)
    repository: Repository<Department>,
  ) {
    super(repository);
  }

  async findByCode(code: string): Promise<Department | null> {
    return this.repository.findOne({ where: { code } });
  }
}

@Injectable()
export class EmployeesService extends CrudService<Employee> {
  constructor(
    @InjectRepository(Employee)
    repository: Repository<Employee>,
    private readonly events: EventsService,
  ) {
    super(repository);
  }

  async create(dto: {
    employeeNumber: string;
    firstName: string;
    lastName: string;
    nationalId: string;
    email?: string;
    phone?: string;
    mobile?: string;
    hireDate: Date;
    position: string;
    departmentId: string;
    baseSalary: number;
    employmentType?: EmploymentType;
    status?: EmployeeStatus;
  }): Promise<Employee> {
    const existing = await this.repository.findOne({
      where: [
        { employeeNumber: dto.employeeNumber },
        { nationalId: dto.nationalId },
      ],
    });
    if (existing)
      throw new ConflictException(
        'Employee number or national ID already exists',
      );

    const saved = await this.repository.save(this.repository.create(dto));
    this.events.emit(DomainEvents.EMPLOYEE_CREATED, {
      type: DomainEvents.EMPLOYEE_CREATED,
      entityId: saved.id,
      data: { employeeNumber: saved.employeeNumber, fullName: `${saved.firstName} ${saved.lastName}` },
    });
    return saved;
  }

  async findByDepartment(departmentId: string): Promise<Employee[]> {
    return this.repository.find({
      where: { departmentId },
      relations: { department: true },
    });
  }

  async findByNationalId(nationalId: string): Promise<Employee | null> {
    return this.repository.findOne({ where: { nationalId } });
  }

  async terminate(id: string, terminationDate: Date): Promise<Employee> {
    const employee = await this.findOne(id);
    employee.status = EmployeeStatus.TERMINATED;
    employee.terminationDate = terminationDate;
    const saved = await this.repository.save(employee);
    this.events.emit(DomainEvents.EMPLOYEE_TERMINATED, {
      type: DomainEvents.EMPLOYEE_TERMINATED,
      entityId: id,
      data: { employeeNumber: saved.employeeNumber, fullName: `${saved.firstName} ${saved.lastName}` },
    });
    return saved;
  }

  async getHeadcount(departmentId?: string): Promise<{ total: number; active: number; byDepartment: Record<string, number> }> {
    const where: any = {};
    if (departmentId) where.departmentId = departmentId;

    const employees = await this.repository.find({ where, relations: { department: true } });
    const active = employees.filter((e) => e.status === EmployeeStatus.ACTIVE).length;
    const byDepartment: Record<string, number> = {};

    for (const emp of employees) {
      const deptName = emp.department?.name || 'Unknown';
      byDepartment[deptName] = (byDepartment[deptName] || 0) + 1;
    }

    return { total: employees.length, active, byDepartment };
  }
}
