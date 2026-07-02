import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseEnumPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AccountDetailsService } from './account-details.service';
import {
  CreateAccountDetailDto,
  UpdateAccountDetailDto,
} from './dto/create-account-detail.dto';
import { AccountDetailType } from './entities/account-detail.entity';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Account Details')
@ApiBearerAuth()
@Controller('account-details')
export class AccountDetailsController {
  constructor(private readonly accountDetailsService: AccountDetailsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create an account detail' })
  create(@Body() dto: CreateAccountDetailDto) {
    return this.accountDetailsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all account details' })
  findAll() {
    return this.accountDetailsService.findAll();
  }

  @Get('by-account/:accountId')
  @ApiOperation({ summary: 'Get account details by account ID' })
  findByAccount(@Param('accountId') accountId: string) {
    return this.accountDetailsService.findByAccount(accountId);
  }

  @Get('by-type/:detailType')
  @ApiOperation({ summary: 'Get account details by type' })
  findByType(
    @Param('detailType', new ParseEnumPipe(AccountDetailType)) detailType: AccountDetailType,
  ) {
    return this.accountDetailsService.findByType(detailType);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get account detail by ID' })
  findOne(@Param('id') id: string) {
    return this.accountDetailsService.findOne(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update account detail' })
  update(@Param('id') id: string, @Body() dto: UpdateAccountDetailDto) {
    return this.accountDetailsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete account detail' })
  remove(@Param('id') id: string) {
    return this.accountDetailsService.softDelete(id);
  }
}
