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
import { TreasuryService } from './treasury.service';
import { CreateTreasuryDto } from './dto/create-treasury.dto';
import {
  CreateDepositDto,
  CreateWithdrawalDto,
  CreateTransferDto,
} from './dto/create-transaction.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Treasury')
@ApiBearerAuth()
@Controller('treasury')
export class TreasuryController {
  constructor(private readonly treasuryService: TreasuryService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a treasury' })
  create(@Body() dto: CreateTreasuryDto) {
    return this.treasuryService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all treasuries' })
  findAll() {
    return this.treasuryService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get treasury by ID' })
  findOne(@Param('id') id: string) {
    return this.treasuryService.findOne(id);
  }

  @Get(':id/balance')
  @ApiOperation({ summary: 'Get treasury balance' })
  getBalance(@Param('id') id: string) {
    return this.treasuryService.getBalance(id);
  }

  @Get(':id/transactions')
  @ApiOperation({ summary: 'Get treasury transactions (paginated)' })
  getTransactions(@Param('id') id: string, @Query() pagination: PaginationDto) {
    return this.treasuryService.getTransactions(
      id,
      pagination.page,
      pagination.limit,
    );
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update treasury' })
  update(@Param('id') id: string, @Body() dto: Partial<CreateTreasuryDto>) {
    return this.treasuryService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete treasury' })
  remove(@Param('id') id: string) {
    return this.treasuryService.softDelete(id);
  }

  @Post('deposit')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Deposit to treasury' })
  deposit(@Body() dto: CreateDepositDto) {
    return this.treasuryService.deposit(dto);
  }

  @Post('withdraw')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Withdraw from treasury' })
  withdraw(@Body() dto: CreateWithdrawalDto) {
    return this.treasuryService.withdraw(dto);
  }

  @Post('transfer')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Transfer between treasuries' })
  transfer(@Body() dto: CreateTransferDto) {
    return this.treasuryService.transfer(dto);
  }
}
