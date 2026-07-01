import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CostCentersService } from './cost-centers.service';
import {
  CreateCostCenterDto,
  UpdateCostCenterDto,
} from './dto/create-cost-center.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Cost Centers')
@ApiBearerAuth()
@Controller('cost-centers')
export class CostCentersController {
  constructor(private readonly costCentersService: CostCentersService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a cost center' })
  create(@Body() dto: CreateCostCenterDto) {
    return this.costCentersService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cost centers' })
  findAll() {
    return this.costCentersService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active cost centers' })
  findActive() {
    return this.costCentersService.findActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get cost center by ID' })
  findOne(@Param('id') id: string) {
    return this.costCentersService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update cost center' })
  update(@Param('id') id: string, @Body() dto: UpdateCostCenterDto) {
    return this.costCentersService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete cost center' })
  remove(@Param('id') id: string) {
    return this.costCentersService.softDelete(id);
  }
}
