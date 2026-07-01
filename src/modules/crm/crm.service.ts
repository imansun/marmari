import {
  Injectable,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import {
  Campaign,
  CampaignStatus,
  CampaignType,
} from './entities/campaign.entity';
import { Visit, VisitStatus, VisitType } from './entities/visit.entity';

@Injectable()
export class CrmService extends CrudService<Campaign> {
  constructor(
    @InjectRepository(Campaign)
    repository: Repository<Campaign>,
    @InjectRepository(Visit)
    private readonly visitRepository: Repository<Visit>,
  ) {
    super(repository);
  }

  async createCampaign(dto: {
    code: string;
    name: string;
    campaignType: string;
    startDate: string;
    endDate: string;
    status?: CampaignStatus;
    budget?: number;
    description?: string;
    targetAudience?: string;
    ownerId?: string;
  }): Promise<Campaign> {
    const existing = await this.repository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Campaign code already exists');

    const campaign = this.repository.create({
      code: dto.code,
      name: dto.name,
      campaignType: dto.campaignType as CampaignType,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
      status: dto.status ?? CampaignStatus.PLANNED,
      budget: dto.budget ?? 0,
      description: dto.description,
      targetAudience: dto.targetAudience,
      ownerId: dto.ownerId,
    });
    return this.repository.save(campaign);
  }

  async updateCampaign(
    id: string,
    dto: Partial<{
      name: string;
      status: CampaignStatus;
      startDate: string;
      endDate: string;
      budget: number;
      cost: number;
      description: string;
      leadsGenerated: number;
      conversions: number;
    }>,
  ): Promise<Campaign> {
    const campaign = await this.findOne(id);
    if (campaign.status === CampaignStatus.CANCELLED) {
      throw new BadRequestException('Cannot update a cancelled campaign');
    }

    const updateData: Record<string, unknown> = {};
    if (dto.name !== undefined) updateData.name = dto.name;
    if (dto.status !== undefined) updateData.status = dto.status;
    if (dto.startDate !== undefined)
      updateData.startDate = new Date(dto.startDate);
    if (dto.endDate !== undefined) updateData.endDate = new Date(dto.endDate);
    if (dto.budget !== undefined) updateData.budget = dto.budget;
    if (dto.cost !== undefined) updateData.cost = dto.cost;
    if (dto.description !== undefined) updateData.description = dto.description;
    if (dto.leadsGenerated !== undefined)
      updateData.leadsGenerated = dto.leadsGenerated;
    if (dto.conversions !== undefined) updateData.conversions = dto.conversions;

    await this.repository.update(id, updateData);
    return this.findOne(id);
  }

  async launch(id: string): Promise<Campaign> {
    const campaign = await this.findOne(id);
    if (campaign.status !== CampaignStatus.PLANNED) {
      throw new BadRequestException('Only planned campaigns can be launched');
    }
    campaign.status = CampaignStatus.ACTIVE;
    return this.repository.save(campaign);
  }

  async pause(id: string): Promise<Campaign> {
    const campaign = await this.findOne(id);
    if (campaign.status !== CampaignStatus.ACTIVE) {
      throw new BadRequestException('Only active campaigns can be paused');
    }
    campaign.status = CampaignStatus.PAUSED;
    return this.repository.save(campaign);
  }

  async complete(id: string): Promise<Campaign> {
    const campaign = await this.findOne(id);
    if (campaign.status === CampaignStatus.CANCELLED) {
      throw new BadRequestException('Cannot complete a cancelled campaign');
    }
    campaign.status = CampaignStatus.COMPLETED;
    return this.repository.save(campaign);
  }

  async cancel(id: string): Promise<Campaign> {
    const campaign = await this.findOne(id);
    if (campaign.status === CampaignStatus.COMPLETED) {
      throw new BadRequestException('Cannot cancel a completed campaign');
    }
    campaign.status = CampaignStatus.CANCELLED;
    return this.repository.save(campaign);
  }

  async getActive(): Promise<Campaign[]> {
    return this.repository.find({
      where: { status: CampaignStatus.ACTIVE },
      order: { startDate: 'ASC' },
    });
  }

  async createVisit(dto: {
    code: string;
    partyId: string;
    date: string;
    visitType: string;
    status?: VisitStatus;
    notes?: string;
    result?: string;
    userId?: string;
    location?: string;
    followUpDate?: string;
    campaignId?: string;
  }): Promise<Visit> {
    const existing = await this.visitRepository.findOne({
      where: { code: dto.code },
    });
    if (existing) throw new ConflictException('Visit code already exists');

    const visit = this.visitRepository.create({
      code: dto.code,
      partyId: dto.partyId,
      date: new Date(dto.date),
      visitType: dto.visitType as VisitType,
      status: dto.status ?? VisitStatus.SCHEDULED,
      notes: dto.notes,
      result: dto.result,
      userId: dto.userId,
      location: dto.location,
      followUpDate: dto.followUpDate ? new Date(dto.followUpDate) : undefined,
      campaignId: dto.campaignId,
    });
    return this.visitRepository.save(visit);
  }

  async updateVisit(
    id: string,
    dto: Partial<{
      status: VisitStatus;
      notes: string;
      result: string;
      followUpDate: string;
      orderId: string;
    }>,
  ): Promise<Visit> {
    const visit = await this.visitRepository.findOneOrFail({ where: { id } });
    if (dto.status !== undefined && VisitStatus.CANCELLED === visit.status) {
      throw new BadRequestException('Cannot update a cancelled visit');
    }

    const updateData: Record<string, unknown> = {};
    if (dto.status !== undefined) updateData.status = dto.status;
    if (dto.notes !== undefined) updateData.notes = dto.notes;
    if (dto.result !== undefined) updateData.result = dto.result;
    if (dto.followUpDate !== undefined)
      updateData.followUpDate = new Date(dto.followUpDate);
    if (dto.orderId !== undefined) updateData.orderId = dto.orderId;
    await this.visitRepository.update(id, updateData);
    return this.visitRepository.findOneOrFail({ where: { id } });
  }

  async getVisitsByParty(partyId: string): Promise<Visit[]> {
    return this.visitRepository.find({
      where: { partyId },
      order: { date: 'DESC' },
    });
  }

  async getVisitsByUser(userId: string): Promise<Visit[]> {
    return this.visitRepository.find({
      where: { userId },
      order: { date: 'DESC' },
    });
  }

  async getVisitsByCampaign(campaignId: string): Promise<Visit[]> {
    return this.visitRepository.find({
      where: { campaignId },
      order: { date: 'DESC' },
    });
  }

  async paginateVisits(
    page = 1,
    limit = 50,
    options?: Record<string, unknown>,
  ): Promise<{ data: Visit[]; meta: any }> {
    const [data, total] = await this.visitRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      ...options,
    });
    return {
      data,
      meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  }

  async findVisit(id: string): Promise<Visit> {
    return this.visitRepository.findOneOrFail({ where: { id } });
  }

  async softDeleteVisit(id: string): Promise<void> {
    await this.visitRepository.softDelete(id);
  }
}
