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
import { VouchersService, VoucherTypesService } from './vouchers.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Vouchers')
@ApiBearerAuth()
@Controller('vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create voucher with items' })
  create(@Body() dto: CreateVoucherDto) {
    return this.vouchersService.createWithItems(dto as any);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vouchers (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.vouchersService.paginate(pagination, {
      relations: { voucherType: true, items: true },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get voucher by ID' })
  findOne(@Param('id') id: string) {
    return this.vouchersService.findOne(id);
  }

  @Patch(':id/confirm')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Confirm a draft voucher' })
  confirm(@Param('id') id: string) {
    return this.vouchersService.confirm(id);
  }

  @Patch(':id/approve')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Approve a confirmed voucher' })
  approve(@Param('id') id: string) {
    return this.vouchersService.approve(id);
  }

  @Patch(':id/reject')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Reject a voucher' })
  reject(@Param('id') id: string) {
    return this.vouchersService.reject(id);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete a voucher' })
  remove(@Param('id') id: string) {
    return this.vouchersService.softDelete(id);
  }
}

@ApiTags('Voucher Types')
@ApiBearerAuth()
@Controller('voucher-types')
export class VoucherTypesController {
  constructor(private readonly voucherTypesService: VoucherTypesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create voucher type' })
  create(@Body() dto: any) {
    return this.voucherTypesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all voucher types' })
  findAll() {
    return this.voucherTypesService.findAll();
  }
}
