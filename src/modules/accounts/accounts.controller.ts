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
import { AccountsService, AccountTypesService } from './accounts.service';
import { CreateAccountDto, UpdateAccountDto } from './dto/create-account.dto';
import { CreateAccountTypeDto } from './dto/create-account-type.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Accounts')
@ApiBearerAuth()
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create a new account' })
  create(@Body() dto: CreateAccountDto) {
    return this.accountsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all accounts (paginated)' })
  findAll(@Query() pagination: PaginationDto) {
    return this.accountsService.paginate(pagination, {
      relations: { accountType: true },
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get account by ID' })
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update account' })
  update(@Param('id') id: string, @Body() dto: UpdateAccountDto) {
    return this.accountsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete account' })
  remove(@Param('id') id: string) {
    return this.accountsService.softDelete(id);
  }

  @Get('tree')
  @ApiOperation({ summary: 'Get chart of accounts tree' })
  getTree() {
    return this.accountsService.getTree();
  }

  @Get('categories')
  @ApiOperation({ summary: 'Get balances by category' })
  getCategories() {
    return this.accountsService.getCategoryBalances();
  }

  @Get(':id/children')
  @ApiOperation({ summary: 'Get child accounts' })
  getChildren(@Param('id') id: string) {
    return this.accountsService
      .findOne(id)
      .then((a) => this.accountsService.getChildren(a.code));
  }

  @Get(':id/balance')
  @ApiOperation({ summary: 'Get account balance' })
  getBalance(@Param('id') id: string) {
    return this.accountsService.getBalance(id);
  }
}

@ApiTags('Account Types')
@ApiBearerAuth()
@Controller('account-types')
export class AccountTypesController {
  constructor(private readonly accountTypesService: AccountTypesService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create account type' })
  create(@Body() dto: CreateAccountTypeDto) {
    return this.accountTypesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all account types' })
  findAll() {
    return this.accountTypesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get account type by ID' })
  findOne(@Param('id') id: string) {
    return this.accountTypesService.findOne(id);
  }
}
