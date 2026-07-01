import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuditService } from './audit.service';
import { QueryAuditDto } from './dto/query-audit.dto';
import { Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('Audit')
@ApiBearerAuth()
@Controller('audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get()
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Query audit logs with filters' })
  findAll(@Query() query: QueryAuditDto) {
    return this.auditService.query(query);
  }

  @Get('entity/:entityType/:entityId')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Get audit logs for a specific entity' })
  findByEntity(
    @Param('entityType') entityType: string,
    @Param('entityId') entityId: string,
  ) {
    return this.auditService.findByEntity(entityType, entityId);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Get audit log by ID' })
  findOne(@Param('id') id: string) {
    return this.auditService.findOne(id);
  }
}
