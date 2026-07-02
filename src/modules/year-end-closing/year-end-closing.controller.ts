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
import { YearEndClosingService } from './year-end-closing.service';
import {
  CreateYearEndClosingDto,
  ExecuteClosingDto,
  ReverseClosingDto,
} from './dto/create-year-end-closing.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Year End Closing')
@ApiBearerAuth()
@Controller('year-end-closing')
export class YearEndClosingController {
  constructor(
    private readonly yearEndClosingService: YearEndClosingService,
  ) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a year end closing' })
  create(@Body() dto: CreateYearEndClosingDto) {
    return this.yearEndClosingService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all year end closings' })
  findAll() {
    return this.yearEndClosingService.findAll();
  }

  @Get('by-fiscal-year/:fiscalYearId')
  @ApiOperation({ summary: 'Get closings by fiscal year' })
  findByFiscalYear(@Param('fiscalYearId') fiscalYearId: string) {
    return this.yearEndClosingService.findByFiscalYear(fiscalYearId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get year end closing by ID' })
  findOne(@Param('id') id: string) {
    return this.yearEndClosingService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update year end closing' })
  update(@Param('id') id: string, @Body() dto: any) {
    return this.yearEndClosingService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete year end closing' })
  remove(@Param('id') id: string) {
    return this.yearEndClosingService.softDelete(id);
  }

  @Post(':id/execute')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Execute year end closing' })
  execute(@Param('id') id: string, @Body() dto: ExecuteClosingDto) {
    return this.yearEndClosingService.executeClosing(id);
  }

  @Post(':id/reverse')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Reverse year end closing' })
  reverse(@Param('id') id: string, @Body() dto: ReverseClosingDto) {
    return this.yearEndClosingService.reverseClosing(id);
  }
}
