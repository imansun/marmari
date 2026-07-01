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
import { AttendanceService } from './attendance.service';
import {
  CreateAttendanceDto,
  UpdateAttendanceDto,
  CreateLeaveDto,
  UpdateLeaveDto,
} from './dto/create-attendance.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Attendance')
@ApiBearerAuth()
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('records')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Record attendance' })
  recordAttendance(@Body() dto: CreateAttendanceDto) {
    return this.attendanceService.recordAttendance(dto);
  }

  @Get('records')
  @ApiOperation({ summary: 'Get all attendance records' })
  findAllRecords(@Query() pagination: PaginationDto) {
    return this.attendanceService.paginate(pagination, {
      order: { date: 'DESC' },
    });
  }

  @Get('records/employee/:employeeId')
  @ApiOperation({ summary: 'Get records by employee' })
  getByEmployee(@Param('employeeId') employeeId: string) {
    return this.attendanceService.getByEmployee(employeeId);
  }

  @Get('records/:id')
  @ApiOperation({ summary: 'Get record by ID' })
  findRecord(@Param('id') id: string) {
    return this.attendanceService.findOne(id);
  }

  @Patch('records/:id')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Update attendance record' })
  updateRecord(@Param('id') id: string, @Body() dto: UpdateAttendanceDto) {
    return this.attendanceService.updateAttendance(id, dto);
  }

  @Delete('records/:id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete attendance record' })
  removeRecord(@Param('id') id: string) {
    return this.attendanceService.softDelete(id);
  }

  @Post('leaves')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Create leave request' })
  createLeave(@Body() dto: CreateLeaveDto) {
    return this.attendanceService.createLeave(dto);
  }

  @Get('leaves')
  @ApiOperation({ summary: 'Get all leave requests' })
  findAllLeaves(@Query() pagination: PaginationDto) {
    return this.attendanceService.paginateLeaves(
      pagination.page,
      pagination.limit,
    );
  }

  @Get('leaves/pending')
  @ApiOperation({ summary: 'Get pending leave requests' })
  getPendingLeaves() {
    return this.attendanceService.getPendingLeaves();
  }

  @Get('leaves/employee/:employeeId')
  @ApiOperation({ summary: 'Get leaves by employee' })
  getLeavesByEmployee(@Param('employeeId') employeeId: string) {
    return this.attendanceService.getLeavesByEmployee(employeeId);
  }

  @Get('leaves/:id')
  @ApiOperation({ summary: 'Get leave by ID' })
  findLeave(@Param('id') id: string) {
    return this.attendanceService.findLeave(id);
  }

  @Patch('leaves/:id')
  @Roles(UserRole.ADMIN, UserRole.HR)
  @ApiOperation({ summary: 'Update leave (approve/reject)' })
  updateLeave(@Param('id') id: string, @Body() dto: UpdateLeaveDto) {
    return this.attendanceService.updateLeave(id, dto);
  }
}
