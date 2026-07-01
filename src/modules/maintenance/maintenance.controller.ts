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
import { MaintenanceService } from './maintenance.service';
import {
  CreateMaintenanceScheduleDto,
  UpdateMaintenanceScheduleDto,
  UpdateMaintenanceTaskDto,
} from './dto/create-maintenance.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Maintenance')
@ApiBearerAuth()
@Controller('maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a maintenance schedule' })
  create(@Body() dto: CreateMaintenanceScheduleDto) {
    return this.maintenanceService.createSchedule(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all maintenance schedules' })
  findAll(@Query() pagination: PaginationDto) {
    return this.maintenanceService.paginate(pagination, {
      order: { scheduledDate: 'DESC' },
    });
  }

  @Get('upcoming')
  @ApiOperation({ summary: 'Get upcoming schedules' })
  getUpcoming(@Query('days') days?: number) {
    return this.maintenanceService.getUpcoming(days);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get schedule by ID' })
  findOne(@Param('id') id: string) {
    return this.maintenanceService.findOne(id);
  }

  @Get('by-work-center/:workCenterId')
  @ApiOperation({ summary: 'Get schedules by work center' })
  findByWorkCenter(@Param('workCenterId') workCenterId: string) {
    return this.maintenanceService.getByWorkCenter(workCenterId);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update schedule' })
  update(@Param('id') id: string, @Body() dto: UpdateMaintenanceScheduleDto) {
    return this.maintenanceService.updateSchedule(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete schedule' })
  remove(@Param('id') id: string) {
    return this.maintenanceService.softDelete(id);
  }

  @Post(':id/start')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Start maintenance' })
  start(@Param('id') id: string) {
    return this.maintenanceService.start(id);
  }

  @Post(':id/complete')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Complete maintenance' })
  complete(@Param('id') id: string) {
    return this.maintenanceService.complete(id);
  }

  @Post(':id/cancel')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Cancel maintenance' })
  cancel(@Param('id') id: string) {
    return this.maintenanceService.cancel(id);
  }

  @Patch('tasks/:taskId')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update maintenance task' })
  updateTask(
    @Param('taskId') taskId: string,
    @Body() dto: UpdateMaintenanceTaskDto,
  ) {
    return this.maintenanceService.updateTask(taskId, dto);
  }
}
