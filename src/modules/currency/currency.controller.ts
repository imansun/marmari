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
import { CurrenciesService } from './currency.service';
import {
  CreateCurrencyDto,
  UpdateCurrencyDto,
  CreateCurrencyRateDto,
} from './dto/create-currency.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Currencies')
@ApiBearerAuth()
@Controller('currencies')
export class CurrenciesController {
  constructor(private readonly currenciesService: CurrenciesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a currency' })
  create(@Body() dto: CreateCurrencyDto) {
    return this.currenciesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all currencies' })
  findAll() {
    return this.currenciesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get currency by ID' })
  findOne(@Param('id') id: string) {
    return this.currenciesService.findOne(id);
  }

  @Get(':id/rates')
  @ApiOperation({ summary: 'Get currency rate history' })
  getRates(@Param('id') id: string) {
    return this.currenciesService.getRates(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update currency' })
  update(@Param('id') id: string, @Body() dto: UpdateCurrencyDto) {
    return this.currenciesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete currency' })
  remove(@Param('id') id: string) {
    return this.currenciesService.softDelete(id);
  }

  @Post(':id/set-base')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Set as base currency' })
  setBase(@Param('id') id: string) {
    return this.currenciesService.setBase(id);
  }

  @Post(':id/update-rate')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update exchange rate' })
  updateRate(@Param('id') id: string, @Body('rate') rate: number) {
    return this.currenciesService.updateRate(id, rate);
  }

  @Post('rates')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Add a currency rate record' })
  addRate(@Body() dto: CreateCurrencyRateDto) {
    return this.currenciesService.updateRate(dto.currencyId, dto.rate);
  }
}
