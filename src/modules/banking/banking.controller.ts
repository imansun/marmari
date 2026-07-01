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
import { BanksService, BankAccountsService } from './banking.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Banks')
@ApiBearerAuth()
@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a bank' })
  create(@Body() dto: CreateBankDto) {
    return this.banksService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all banks' })
  findAll() {
    return this.banksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get bank by ID' })
  findOne(@Param('id') id: string) {
    return this.banksService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update bank' })
  update(@Param('id') id: string, @Body() dto: Partial<CreateBankDto>) {
    return this.banksService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete bank' })
  remove(@Param('id') id: string) {
    return this.banksService.softDelete(id);
  }
}

@ApiTags('Bank Accounts')
@ApiBearerAuth()
@Controller('bank-accounts')
export class BankAccountsController {
  constructor(private readonly bankAccountsService: BankAccountsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a bank account' })
  create(@Body() dto: any) {
    return this.bankAccountsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bank accounts (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.bankAccountsService.paginate(pagination, {
      relations: { bank: true },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get bank account by ID' })
  findOne(@Param('id') id: string) {
    return this.bankAccountsService.findOne(id);
  }
}
