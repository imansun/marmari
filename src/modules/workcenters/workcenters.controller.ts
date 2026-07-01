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
import { WorkcentersService } from './workcenters.service';
import {
  CreateWorkCenterDto,
  UpdateWorkCenterDto,
} from './dto/create-work-center.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Work Centers')
@ApiBearerAuth()
@Controller('work-centers')
export class WorkcentersController {
  constructor(private readonly workcentersService: WorkcentersService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a work center' })
  create(@Body() dto: CreateWorkCenterDto) {
    return this.workcentersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all work centers' })
  findAll(@Query() pagination: PaginationDto) {
    return this.workcentersService.paginate(pagination, {
      order: { name: 'ASC' },
    });
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active work centers' })
  getActive() {
    return this.workcentersService.getActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get work center by ID' })
  findOne(@Param('id') id: string) {
    return this.workcentersService.findOne(id);
  }

  @Get('by-department/:departmentId')
  @ApiOperation({ summary: 'Get work centers by department' })
  findByDepartment(@Param('departmentId') departmentId: string) {
    return this.workcentersService.findByDepartment(departmentId);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update work center' })
  update(@Param('id') id: string, @Body() dto: UpdateWorkCenterDto) {
    return this.workcentersService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete work center' })
  remove(@Param('id') id: string) {
    return this.workcentersService.softDelete(id);
  }
}
