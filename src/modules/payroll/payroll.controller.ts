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
import { PayrollService } from './payroll.service';
import {
  CreatePayrollPeriodDto,
  UpdatePayrollPeriodDto,
} from './dto/create-payroll.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Payroll')
@ApiBearerAuth()
@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Post('periods')
  @Roles(UserRole.ADMIN, UserRole.FINANCE, UserRole.HR)
  @ApiOperation({ summary: 'Create a payroll period' })
  createPeriod(@Body() dto: CreatePayrollPeriodDto) {
    return this.payrollService.createPeriod(dto);
  }

  @Get('periods')
  @ApiOperation({ summary: 'Get all payroll periods' })
  findAllPeriods(@Query() pagination: PaginationDto) {
    return this.payrollService.paginate(pagination, {
      order: { startDate: 'DESC' },
    });
  }

  @Get('periods/:id')
  @ApiOperation({ summary: 'Get period by ID' })
  findPeriod(@Param('id') id: string) {
    return this.payrollService.findOne(id);
  }

  @Patch('periods/:id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE, UserRole.HR)
  @ApiOperation({ summary: 'Update period' })
  updatePeriod(@Param('id') id: string, @Body() dto: UpdatePayrollPeriodDto) {
    return this.payrollService.update(id, dto);
  }

  @Delete('periods/:id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete period' })
  removePeriod(@Param('id') id: string) {
    return this.payrollService.softDelete(id);
  }

  @Post('periods/:id/process')
  @Roles(UserRole.ADMIN, UserRole.FINANCE, UserRole.HR)
  @ApiOperation({ summary: 'Process payroll (calculate)' })
  process(@Param('id') id: string) {
    return this.payrollService.process(id);
  }

  @Post('periods/:id/pay')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Mark period as paid' })
  markPaid(@Param('id') id: string) {
    return this.payrollService.markPaid(id);
  }

  @Post('periods/:id/cancel')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Cancel period' })
  cancelPeriod(@Param('id') id: string) {
    return this.payrollService.cancel(id);
  }

  @Get('items/employee/:employeeId')
  @ApiOperation({ summary: 'Get payroll items by employee' })
  getByEmployee(@Param('employeeId') employeeId: string) {
    return this.payrollService.getByEmployee(employeeId);
  }
}
