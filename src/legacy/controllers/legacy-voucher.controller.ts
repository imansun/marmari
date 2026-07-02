import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { LegacyVoucherService } from '../services/legacy-voucher.service';

@ApiTags('Legacy - Vouchers')
@Controller('legacy/vouchers')
export class LegacyVoucherController {
  constructor(private readonly service: LegacyVoucherService) {}

  @Get()
  @ApiOperation({ summary: 'Read all vouchers from legacy sg3 schema' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
    return this.service.findAll(Number(page), Number(limit));
  }

  @Get('types')
  @ApiOperation({ summary: 'Read all voucher types from legacy' })
  findVoucherTypes() {
    return this.service.findVoucherTypes();
  }

  @Get('types/:id')
  @ApiOperation({ summary: 'Read voucher type by ID' })
  findVoucherType(@Param('id') id: string) {
    return this.service.findVoucherType(Number(id));
  }

  @Get('by-daily/:dailyNumber')
  @ApiOperation({ summary: 'Find vouchers by daily number' })
  findByDailyNumber(@Param('dailyNumber') dailyNumber: string) {
    return this.service.findByDailyNumber(Number(dailyNumber));
  }

  @Get('date-range')
  @ApiOperation({ summary: 'Find vouchers by date range (YYYY-MM-DD)' })
  @ApiQuery({ name: 'from', required: true })
  @ApiQuery({ name: 'to', required: true })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  findByDateRange(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('page') page = 1,
    @Query('limit') limit = 20,
  ) {
    return this.service.findByDateRange(from, to, Number(page), Number(limit));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Read voucher by legacy ID' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Get(':id/items')
  @ApiOperation({ summary: 'Read voucher items by voucher ID' })
  findItems(@Param('id') id: string) {
    return this.service.findItemsByVoucherId(Number(id));
  }
}
