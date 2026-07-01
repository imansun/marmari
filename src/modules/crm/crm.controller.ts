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
import { CrmService } from './crm.service';
import {
  CreateCampaignDto,
  UpdateCampaignDto,
} from './dto/create-campaign.dto';
import { CreateVisitDto, UpdateVisitDto } from './dto/create-visit.dto';
import { PaginationDto, Roles } from '../../common';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('CRM')
@ApiBearerAuth()
@Controller('crm')
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  @Post('campaigns')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Create a campaign' })
  createCampaign(@Body() dto: CreateCampaignDto) {
    return this.crmService.createCampaign(dto);
  }

  @Get('campaigns')
  @ApiOperation({ summary: 'Get all campaigns' })
  findAllCampaigns(@Query() pagination: PaginationDto) {
    return this.crmService.paginate(pagination, {
      order: { startDate: 'DESC' },
    });
  }

  @Get('campaigns/active')
  @ApiOperation({ summary: 'Get active campaigns' })
  getActiveCampaigns() {
    return this.crmService.getActive();
  }

  @Get('campaigns/:id')
  @ApiOperation({ summary: 'Get campaign by ID' })
  findCampaign(@Param('id') id: string) {
    return this.crmService.findOne(id);
  }

  @Patch('campaigns/:id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Update campaign' })
  updateCampaign(@Param('id') id: string, @Body() dto: UpdateCampaignDto) {
    return this.crmService.updateCampaign(id, dto);
  }

  @Delete('campaigns/:id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete campaign' })
  removeCampaign(@Param('id') id: string) {
    return this.crmService.softDelete(id);
  }

  @Post('campaigns/:id/launch')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Launch a planned campaign' })
  launchCampaign(@Param('id') id: string) {
    return this.crmService.launch(id);
  }

  @Post('campaigns/:id/pause')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Pause an active campaign' })
  pauseCampaign(@Param('id') id: string) {
    return this.crmService.pause(id);
  }

  @Post('campaigns/:id/complete')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Complete a campaign' })
  completeCampaign(@Param('id') id: string) {
    return this.crmService.complete(id);
  }

  @Post('campaigns/:id/cancel')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @ApiOperation({ summary: 'Cancel a campaign' })
  cancelCampaign(@Param('id') id: string) {
    return this.crmService.cancel(id);
  }

  @Post('visits')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.SALES)
  @ApiOperation({ summary: 'Create a visit' })
  createVisit(@Body() dto: CreateVisitDto) {
    return this.crmService.createVisit(dto);
  }

  @Get('visits')
  @ApiOperation({ summary: 'Get all visits' })
  findAllVisits(@Query() pagination: PaginationDto) {
    return this.crmService.paginateVisits(pagination.page, pagination.limit, {
      order: { date: 'DESC' },
    });
  }

  @Get('visits/by-party/:partyId')
  @ApiOperation({ summary: 'Get visits by party' })
  getVisitsByParty(@Param('partyId') partyId: string) {
    return this.crmService.getVisitsByParty(partyId);
  }

  @Get('visits/by-user/:userId')
  @ApiOperation({ summary: 'Get visits by user' })
  getVisitsByUser(@Param('userId') userId: string) {
    return this.crmService.getVisitsByUser(userId);
  }

  @Get('visits/by-campaign/:campaignId')
  @ApiOperation({ summary: 'Get visits by campaign' })
  getVisitsByCampaign(@Param('campaignId') campaignId: string) {
    return this.crmService.getVisitsByCampaign(campaignId);
  }

  @Get('visits/:id')
  @ApiOperation({ summary: 'Get visit by ID' })
  findVisit(@Param('id') id: string) {
    return this.crmService.findVisit(id);
  }

  @Patch('visits/:id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.SALES)
  @ApiOperation({ summary: 'Update visit' })
  updateVisit(@Param('id') id: string, @Body() dto: UpdateVisitDto) {
    return this.crmService.updateVisit(id, dto);
  }

  @Delete('visits/:id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Delete visit' })
  removeVisit(@Param('id') id: string) {
    return this.crmService.softDeleteVisit(id);
  }
}
