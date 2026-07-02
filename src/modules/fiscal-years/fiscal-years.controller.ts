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
import { FiscalYearsService } from './fiscal-years.service';
import {
  CreateFiscalYearDto,
  UpdateFiscalYearDto,
} from './dto/create-fiscal-year.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Fiscal Years')
@ApiBearerAuth()
@Controller('fiscal-years')
export class FiscalYearsController {
  constructor(private readonly fiscalYearsService: FiscalYearsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a fiscal year' })
  create(@Body() dto: CreateFiscalYearDto) {
    return this.fiscalYearsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all fiscal years' })
  findAll() {
    return this.fiscalYearsService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active fiscal years' })
  findActive() {
    return this.fiscalYearsService.findActive();
  }

  @Get('current')
  @ApiOperation({ summary: 'Get current fiscal year' })
  findCurrent() {
    return this.fiscalYearsService.findCurrent();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get fiscal year by ID' })
  findOne(@Param('id') id: string) {
    return this.fiscalYearsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update fiscal year' })
  update(@Param('id') id: string, @Body() dto: UpdateFiscalYearDto) {
    return this.fiscalYearsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete fiscal year' })
  remove(@Param('id') id: string) {
    return this.fiscalYearsService.softDelete(id);
  }
}
