import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
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

    return this.repository.save(this.repository.create(dto));
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
    return this.repository.save(employee);
  }
}
