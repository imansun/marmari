import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentsController, EmployeesController } from './hr.controller';
import { DepartmentsService, EmployeesService } from './hr.service';
import { Department } from './entities/department.entity';
import { Employee } from './entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department, Employee])],
  controllers: [DepartmentsController, EmployeesController],
  providers: [DepartmentsService, EmployeesService],
  exports: [DepartmentsService, EmployeesService],
})
export class HrModule {}
