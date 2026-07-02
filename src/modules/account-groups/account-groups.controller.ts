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
import { AccountGroupsService } from './account-groups.service';
import {
  CreateAccountGroupDto,
  UpdateAccountGroupDto,
} from './dto/create-account-group.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Account Groups')
@ApiBearerAuth()
@Controller('account-groups')
export class AccountGroupsController {
  constructor(private readonly accountGroupsService: AccountGroupsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Create an account group' })
  create(@Body() dto: CreateAccountGroupDto) {
    return this.accountGroupsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all account groups' })
  findAll() {
    return this.accountGroupsService.findAll();
  }

  @Get('tree')
  @ApiOperation({ summary: 'Get account groups tree' })
  getTree() {
    return this.accountGroupsService.getTree();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get account group by ID' })
  findOne(@Param('id') id: string) {
    return this.accountGroupsService.findOne(id);
  }

  @Get(':id/children')
  @ApiOperation({ summary: 'Get children of an account group' })
  getChildren(@Param('id') id: string) {
    return this.accountGroupsService.getChildren(id);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN, UserRole.FINANCE)
  @ApiOperation({ summary: 'Update account group' })
  update(@Param('id') id: string, @Body() dto: UpdateAccountGroupDto) {
    return this.accountGroupsService.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete account group' })
  remove(@Param('id') id: string) {
    return this.accountGroupsService.softDelete(id);
  }
}
