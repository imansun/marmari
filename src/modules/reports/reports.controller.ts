import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
} from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import {
  ReportDefinition,
  ReportCategory,
} from './entities/report-definition.entity';
import { ReportExecution } from './entities/report-execution.entity';
import {
  CreateReportDefinitionDto,
  ExecuteReportDto,
} from './dto/create-report-definition.dto';
import { Roles, CurrentUser } from '../../common';

@ApiTags('Reports')
@ApiBearerAuth()
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post('definitions')
  @Roles('admin', 'manager')
  @ApiOperation({ summary: 'Create report definition' })
  createDefinition(
    @Body() dto: CreateReportDefinitionDto,
  ): Promise<ReportDefinition> {
    return this.reportsService.createDefinition(dto);
  }

  @Get('definitions')
  @ApiOperation({ summary: 'List all report definitions' })
  findAllDefinitions(): Promise<ReportDefinition[]> {
    return this.reportsService.findAll();
  }

  @Get('definitions/by-category')
  @ApiOperation({ summary: 'Get reports by category' })
  @ApiQuery({ name: 'category', enum: ReportCategory })
  findByCategory(
    @Query('category') category: ReportCategory,
  ): Promise<ReportDefinition[]> {
    return this.reportsService.findByCategory(category);
  }

  @Get('definitions/:id')
  @ApiOperation({ summary: 'Get report definition by id' })
  findOneDefinition(@Param('id') id: string): Promise<ReportDefinition> {
    return this.reportsService.findOne(id);
  }

  @Get('definitions/code/:code')
  @ApiOperation({ summary: 'Get report definition by code' })
  findByCode(@Param('code') code: string): Promise<ReportDefinition> {
    return this.reportsService.findOneBy({ code });
  }

  @Post(':id/execute')
  @Roles('admin', 'manager', 'user')
  @ApiOperation({ summary: 'Execute a report' })
  execute(
    @Param('id') id: string,
    @Body() dto: ExecuteReportDto,
    @CurrentUser('id') userId: string,
  ): Promise<ReportExecution> {
    return this.reportsService.execute(id, dto, userId);
  }

  @Get(':id/executions')
  @ApiOperation({ summary: 'Get executions for a report' })
  findExecutions(@Param('id') id: string): Promise<ReportExecution[]> {
    return this.reportsService.findExecutions(id);
  }
}
