import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PriceListsService } from './pricing.service';
import {
  CreatePriceListDto,
  UpdatePriceListDto,
} from './dto/create-price-list.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Pricing')
@ApiBearerAuth()
@Controller('price-lists')
export class PriceListsController {
  constructor(private readonly priceListsService: PriceListsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SALES)
  @ApiOperation({ summary: 'Create a price list with items' })
  create(@Body() dto: CreatePriceListDto) {
    return this.priceListsService.createWithItems(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all price lists (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.priceListsService.paginate(pagination);
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active price lists' })
  findActive() {
    return this.priceListsService.findActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get price list by ID' })
  findOne(@Param('id') id: string) {
    return this.priceListsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.SALES)
  @ApiOperation({ summary: 'Update price list' })
  update(@Param('id') id: string, @Body() dto: UpdatePriceListDto) {
    return this.priceListsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete price list' })
  remove(@Param('id') id: string) {
    return this.priceListsService.softDelete(id);
  }
}
