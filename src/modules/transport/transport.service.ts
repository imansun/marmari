import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrudService } from '../../core';
import { Transport, TransportStatus } from './entities/transport.entity';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';

@Injectable()
export class TransportService extends CrudService<Transport> {
  constructor(
    @InjectRepository(Transport)
    private readonly transportRepository: Repository<Transport>,
  ) {
    super(transportRepository);
  }

  async createTransport(dto: CreateTransportDto): Promise<Transport> {
    return this.transportRepository.save(
      this.transportRepository.create(dto as unknown as Partial<Transport>),
    );
  }

  async updateTransport(
    id: string,
    dto: UpdateTransportDto,
  ): Promise<Transport> {
    const transport = await this.transportRepository.findOneOrFail({
      where: { id },
    });
    const validTransitions: Record<TransportStatus, TransportStatus[]> = {
      [TransportStatus.PLANNED]: [
        TransportStatus.IN_TRANSIT,
        TransportStatus.CANCELLED,
      ],
      [TransportStatus.IN_TRANSIT]: [
        TransportStatus.DELIVERED,
        TransportStatus.CANCELLED,
      ],
      [TransportStatus.DELIVERED]: [],
      [TransportStatus.CANCELLED]: [],
    };
    const allowed = validTransitions[transport.status];
    if (!allowed.includes(dto.status)) {
      throw new BadRequestException(
        `Cannot transition from ${transport.status} to ${dto.status}`,
      );
    }
    if (dto.actualDeparture)
      transport.actualDeparture = new Date(dto.actualDeparture);
    if (dto.actualArrival)
      transport.actualArrival = new Date(dto.actualArrival);
    transport.status = dto.status;
    return this.transportRepository.save(transport);
  }

  async getInTransit(): Promise<Transport[]> {
    return this.transportRepository.find({
      where: { status: TransportStatus.IN_TRANSIT },
    });
  }
}
