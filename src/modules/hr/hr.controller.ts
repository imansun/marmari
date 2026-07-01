import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { DepartmentsService, EmployeesService } from './hr.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import {
  CreateEmployeeDto,
  UpdateEmployeeDto,
} from './dto/create-employee.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Departments')
@ApiBearerAuth()
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Create a department' })
  create(@Body() dto: CreateDepartmentDto) {
    return this.departmentsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all departments' })
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get department by ID' })
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Update department' })
  update(@Param('id') id: string, @Body() dto: Partial<CreateDepartmentDto>) {
    return this.departmentsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete department' })
  remove(@Param('id') id: string) {
    return this.departmentsService.softDelete(id);
  }
}

@ApiTags('Employees')
@ApiBearerAuth()
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Create an employee' })
  create(@Body() dto: CreateEmployeeDto) {
    return this.employeesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.employeesService.paginate(pagination, {
      relations: { department: true },
    });
  }

  @Get('department/:departmentId')
  @ApiOperation({ summary: 'Get employees by department' })
  findByDepartment(@Param('departmentId') departmentId: string) {
    return this.employeesService.findByDepartment(departmentId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by ID' })
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Update employee' })
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeDto) {
    return this.employeesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete employee' })
  remove(@Param('id') id: string) {
    return this.employeesService.softDelete(id);
  }

  @Post(':id/terminate')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Terminate an employee' })
  terminate(
    @Param('id') id: string,
    @Body('terminationDate') terminationDate: Date,
  ) {
    return this.employeesService.terminate(id, terminationDate);
  }
}
