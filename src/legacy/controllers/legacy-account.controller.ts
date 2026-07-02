import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { LegacyAccountService } from '../services/legacy-account.service';

@ApiTags('Legacy - Accounts')
@Controller('legacy/accounts')
export class LegacyAccountController {
  constructor(private readonly service: LegacyAccountService) {}

  @Get()
  @ApiOperation({ summary: 'Read all accounts from legacy sg3 schema' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
    return this.service.findAll(Number(page), Number(limit));
  }

  @Get('types')
  @ApiOperation({ summary: 'Read all account types from legacy' })
  findAccountTypes() {
    return this.service.findAccountTypes();
  }

  @Get('types/:id')
  @ApiOperation({ summary: 'Read account type by ID' })
  findAccountType(@Param('id') id: string) {
    return this.service.findAccountType(Number(id));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Read account by legacy ID' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Get('code/:code')
  @ApiOperation({ summary: 'Find account by code (Number field)' })
  findByCode(@Param('code') code: string) {
    return this.service.findByCode(code);
  }
}
