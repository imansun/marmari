import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TaxTablesService } from './tax.service';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Tax')
@ApiBearerAuth()
@Controller('tax')
export class TaxController {
  constructor(private readonly taxTablesService: TaxTablesService) {}

  @Post('tables')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a tax table' })
  createTable(@Body() dto: any) {
    return this.taxTablesService.create(dto);
  }

  @Get('tables')
  @ApiOperation({ summary: 'Get tax tables' })
  findAllTables(@Query() pagination: PaginationDto) {
    return this.taxTablesService.paginate(pagination, {
      relations: { items: true },
    });
  }

  @Get('tables/:id')
  @ApiOperation({ summary: 'Get tax table' })
  findTable(@Param('id') id: string) {
    return this.taxTablesService.findOne(id);
  }

  @Get('calculate/:tableCode')
  @ApiOperation({ summary: 'Calculate tax for an amount' })
  async calculate(
    @Param('tableCode') tableCode: string,
    @Query('amount') amount: string,
  ) {
    const taxAmount = await this.taxTablesService.calculateTax(
      tableCode,
      parseFloat(amount),
    );
    return {
      tableCode,
      amount: parseFloat(amount),
      taxAmount,
      total: parseFloat(amount) + taxAmount,
    };
  }
}
