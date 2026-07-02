import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { TaxTablesService } from './tax.service';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';
import { CreateTaxTableDto, UpdateTaxTableDto } from './dto/create-tax-table.dto';
import { CalculateTaxDto } from './dto/calculate-tax.dto';

@ApiTags('Tax')
@ApiBearerAuth()
@Controller('tax')
export class TaxController {
  constructor(private readonly taxTablesService: TaxTablesService) {}

  @Post('tables')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a tax table' })
  createTable(@Body() dto: CreateTaxTableDto) {
    return this.taxTablesService.create(dto as any);
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

  @Put('tables/:id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update a tax table' })
  updateTable(@Param('id') id: string, @Body() dto: UpdateTaxTableDto) {
    return this.taxTablesService.update(id, dto as any);
  }

  @Delete('tables/:id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Delete a tax table' })
  deleteTable(@Param('id') id: string) {
    return this.taxTablesService.remove(id);
  }

  @Post('calculate')
  @ApiOperation({ summary: 'Calculate tax for an amount' })
  async calculate(@Body() dto: CalculateTaxDto) {
    const taxAmount = await this.taxTablesService.calculateTax(
      dto.tableCode,
      dto.amount,
    );
    return {
      tableCode: dto.tableCode,
      amount: dto.amount,
      taxAmount,
      total: dto.amount + taxAmount,
    };
  }
}
