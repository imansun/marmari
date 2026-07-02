import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { LegacyPartyService } from '../services/legacy-party.service';

@ApiTags('Legacy - Parties')
@Controller('legacy/parties')
export class LegacyPartyController {
  constructor(private readonly service: LegacyPartyService) {}

  @Get()
  @ApiOperation({ summary: 'Read all parties from legacy sg3 schema' })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'limit', required: false })
  findAll(@Query('page') page = 1, @Query('limit') limit = 20) {
    return this.service.findAll(Number(page), Number(limit));
  }

  @Get('mobile/:mobile')
  @ApiOperation({ summary: 'Find party by mobile number' })
  findByMobile(@Param('mobile') mobile: string) {
    return this.service.findByMobile(mobile);
  }

  @Get('national-id/:nationalId')
  @ApiOperation({ summary: 'Find party by national ID' })
  findByNationalId(@Param('nationalId') nationalId: string) {
    return this.service.findByNationalId(nationalId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Read party by legacy ID' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }
}
