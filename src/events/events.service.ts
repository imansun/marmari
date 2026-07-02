import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { EntityEvents } from './events.constants';

export interface EntityEventPayload {
  entityType: string;
  entityId: string;
  data?: Record<string, unknown>;
}

export interface DomainEventPayload {
  type: string;
  entityId: string;
  data?: Record<string, unknown>;
}

@Injectable()
export class EventsService {
  constructor(private readonly emitter: EventEmitter2) {}

  emitEntityCreated(
    entityType: string,
    entityId: string,
    data?: Record<string, unknown>,
  ): void {
    this.emitter.emit(EntityEvents.CREATED, { entityType, entityId, data });
  }

  emitEntityUpdated(
    entityType: string,
    entityId: string,
    data?: Record<string, unknown>,
  ): void {
    this.emitter.emit(EntityEvents.UPDATED, { entityType, entityId, data });
  }

  emitEntityDeleted(
    entityType: string,
    entityId: string,
    data?: Record<string, unknown>,
  ): void {
    this.emitter.emit(EntityEvents.DELETED, { entityType, entityId, data });
  }

  emit(eventName: string, payload: DomainEventPayload): void {
    this.emitter.emit(eventName, payload);
  }
}
