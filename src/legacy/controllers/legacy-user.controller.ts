import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { LegacyUserService } from '../services/legacy-user.service';

@ApiTags('Legacy - Users')
@Controller('legacy/users')
export class LegacyUserController {
  constructor(private readonly service: LegacyUserService) {}

  @Get()
  @ApiOperation({ summary: 'Read all users from legacy sg3 schema' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
    return this.service.findAll(Number(page), Number(limit));
  }

  @Get('search/:name')
  @ApiOperation({ summary: 'Search users by name' })
  findByName(@Param('name') name: string) {
    return this.service.findByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Read user by legacy ID' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }
}
