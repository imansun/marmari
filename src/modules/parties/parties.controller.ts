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
import { PartiesService } from './parties.service';
import { CreatePartyDto, UpdatePartyDto } from './dto/create-party.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Parties')
@ApiBearerAuth()
@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SALES)
  @ApiOperation({ summary: 'Create a party (customer/supplier)' })
  create(@Body() dto: CreatePartyDto) {
    return this.partiesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all parties (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.partiesService.paginate(pagination);
  }

  @Get('customers')
  @ApiOperation({ summary: 'Get all customers' })
  getCustomers() {
    return this.partiesService.getCustomers();
  }

  @Get('suppliers')
  @ApiOperation({ summary: 'Get all suppliers' })
  getSuppliers() {
    return this.partiesService.getSuppliers();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get party by ID' })
  findOne(@Param('id') id: string) {
    return this.partiesService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.SALES)
  @ApiOperation({ summary: 'Update party' })
  update(@Param('id') id: string, @Body() dto: UpdatePartyDto) {
    return this.partiesService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete party' })
  remove(@Param('id') id: string) {
    return this.partiesService.softDelete(id);
  }
}
