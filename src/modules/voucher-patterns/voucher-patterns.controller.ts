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
import { VoucherPatternsService } from './voucher-patterns.service';
import {
  CreateVoucherPatternDto,
  UpdateVoucherPatternDto,
} from './dto/create-voucher-pattern.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Voucher Patterns')
@ApiBearerAuth()
@Controller('voucher-patterns')
export class VoucherPatternsController {
  constructor(
    private readonly voucherPatternsService: VoucherPatternsService,
  ) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a voucher pattern' })
  create(@Body() dto: CreateVoucherPatternDto) {
    return this.voucherPatternsService.create(dto as any);
  }

  @Get()
  @ApiOperation({ summary: 'Get all voucher patterns' })
  findAll() {
    return this.voucherPatternsService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active voucher patterns' })
  findActive() {
    return this.voucherPatternsService.findActive();
  }

  @Get('by-voucher-type/:voucherTypeId')
  @ApiOperation({ summary: 'Get patterns by voucher type' })
  findByVoucherType(@Param('voucherTypeId') voucherTypeId: string) {
    return this.voucherPatternsService.findByVoucherType(voucherTypeId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get voucher pattern by ID' })
  findOne(@Param('id') id: string) {
    return this.voucherPatternsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update voucher pattern' })
  update(@Param('id') id: string, @Body() dto: UpdateVoucherPatternDto) {
    return this.voucherPatternsService.update(id, dto as any);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete voucher pattern' })
  remove(@Param('id') id: string) {
    return this.voucherPatternsService.softDelete(id);
  }
}
