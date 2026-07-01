import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { DashboardsService } from './dashboards.service';
import { Dashboard } from './entities/dashboard.entity';
import { DashboardWidget } from './entities/dashboard-widget.entity';
import {
  CreateDashboardDto,
  CreateWidgetDto,
  UpdateWidgetPositionDto,
} from './dto/create-dashboard.dto';
import { Roles } from '../../common';

@ApiTags('Dashboards')
@ApiBearerAuth()
@Controller('dashboards')
export class DashboardsController {
  constructor(private readonly dashboardsService: DashboardsService) {}

  @Post()
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Create dashboard' })
  create(@Body() dto: CreateDashboardDto): Promise<Dashboard> {
    return this.dashboardsService.createDashboard(dto);
  }

  @Get()
  @ApiOperation({ summary: 'List all dashboards' })
  findAll(): Promise<Dashboard[]> {
    return this.dashboardsService.findAll();
  }

  @Get('default')
  @ApiOperation({ summary: 'Get default dashboard' })
  getDefault(): Promise<Dashboard | null> {
    return this.dashboardsService.getDefault();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get dashboard with widgets' })
  findOne(@Param('id') id: string): Promise<Dashboard> {
    return this.dashboardsService.getDashboardWithWidgets(id);
  }

  @Patch(':id/set-default')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Set dashboard as default' })
  setDefault(@Param('id') id: string): Promise<Dashboard> {
    return this.dashboardsService.setDefault(id);
  }

  @Post(':id/widgets')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Add widget to dashboard' })
  addWidget(
    @Param('id') id: string,
    @Body() dto: CreateWidgetDto,
  ): Promise<DashboardWidget> {
    return this.dashboardsService.addWidget(id, dto);
  }

  @Get(':id/widgets')
  @ApiOperation({ summary: 'Get widgets for dashboard' })
  getWidgets(@Param('id') id: string): Promise<DashboardWidget[]> {
    return this.dashboardsService.getWidgets(id);
  }

  @Patch('widgets/:id/position')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Update widget position' })
  updateWidgetPosition(
    @Param('id') id: string,
    @Body() dto: UpdateWidgetPositionDto,
  ): Promise<DashboardWidget> {
    return this.dashboardsService.updateWidgetPosition(id, dto);
  }

  @Delete('widgets/:id')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Remove widget' })
  removeWidget(@Param('id') id: string): Promise<void> {
    return this.dashboardsService.removeWidget(id);
  }
}
