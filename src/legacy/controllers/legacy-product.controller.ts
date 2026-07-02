import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { LegacyProductService } from '../services/legacy-product.service';

@ApiTags('Legacy - Products')
@Controller('legacy/products')
export class LegacyProductController {
  constructor(private readonly service: LegacyProductService) {}

  @Get()
  @ApiOperation({ summary: 'Read all products from legacy sg3 schema' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
    return this.service.findAll(Number(page), Number(limit));
  }

  @Get('search/:name')
  @ApiOperation({ summary: 'Search products by name' })
  findByName(@Param('name') name: string) {
    return this.service.findByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Read product by legacy ID' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }
}
