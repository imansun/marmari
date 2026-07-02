import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
  RemoveEvent,
  SoftRemoveEvent,
  RecoverEvent,
} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { EventsService } from '../../events';

@Injectable()
@EventSubscriber()
export class EntityEventSubscriber implements EntitySubscriberInterface {
  constructor(
    private readonly dataSource: DataSource,
    private readonly events: EventsService,
  ) {
    this.dataSource.subscribers.push(this);
  }

  afterInsert(event: InsertEvent<any>): void {
    this.emitEntityEvent(event.entity, 'created');
  }

  afterUpdate(event: UpdateEvent<any>): void {
    this.emitEntityEvent(event.entity, 'updated');
  }

  afterRemove(event: RemoveEvent<any>): void {
    this.emitEntityEvent(event.entity, 'deleted');
  }

  afterSoftRemove(event: SoftRemoveEvent<any>): void {
    this.emitEntityEvent(event.entity, 'deleted');
  }

  afterRecover(event: RecoverEvent<any>): void {
    this.emitEntityEvent(event.entity, 'created');
  }

  private emitEntityEvent(
    entity: any,
    eventType: 'created' | 'updated' | 'deleted',
  ): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (!entity?.constructor?.name) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const entityType = entity.constructor.name as string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const entityId = entity.id as string;
    if (eventType === 'created') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.events.emitEntityCreated(entityType, entityId, entity);
    } else if (eventType === 'updated') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.events.emitEntityUpdated(entityType, entityId, entity);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      this.events.emitEntityDeleted(entityType, entityId, entity);
    }
  }
}
