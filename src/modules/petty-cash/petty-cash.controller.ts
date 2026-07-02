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
import { PettyCashService } from './petty-cash.service';
import {
  CreatePettyCashDto,
  UpdatePettyCashDto,
  TransactionDto,
} from './dto/create-petty-cash.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Petty Cash')
@ApiBearerAuth()
@Controller('petty-cash')
export class PettyCashController {
  constructor(private readonly pettyCashService: PettyCashService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a petty cash' })
  create(@Body() dto: CreatePettyCashDto) {
    return this.pettyCashService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all petty cash' })
  findAll() {
    return this.pettyCashService.findAll();
  }

  @Get('active')
  @ApiOperation({ summary: 'Get active petty cash' })
  findActive() {
    return this.pettyCashService.findActive();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get petty cash by ID' })
  findOne(@Param('id') id: string) {
    return this.pettyCashService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update petty cash' })
  update(@Param('id') id: string, @Body() dto: UpdatePettyCashDto) {
    return this.pettyCashService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete petty cash' })
  remove(@Param('id') id: string) {
    return this.pettyCashService.softDelete(id);
  }

  @Post(':id/deposit')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Deposit to petty cash' })
  deposit(@Param('id') id: string, @Body() dto: TransactionDto) {
    return this.pettyCashService.updateBalance(id, dto.amount);
  }

  @Post(':id/withdraw')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Withdraw from petty cash' })
  withdraw(@Param('id') id: string, @Body() dto: TransactionDto) {
    return this.pettyCashService.updateBalance(id, -dto.amount);
  }
}
