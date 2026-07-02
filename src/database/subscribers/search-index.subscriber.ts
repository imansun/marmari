import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EntityEvents } from '../../events';
import type { EntityEventPayload } from '../../events';
import { SearchService } from '../../modules/search/search.service';

@Injectable()
export class SearchIndexSubscriber {
  private readonly logger = new Logger(SearchIndexSubscriber.name);

  constructor(private readonly search: SearchService) {}

  @OnEvent(EntityEvents.CREATED)
  async handleCreated(payload: EntityEventPayload): Promise<void> {
    try {
      const entityType = payload.entityType.toLowerCase();
      await this.search.indexDocument({
        id: `${entityType}_${payload.entityId}`,
        entityType,
        entityId: payload.entityId,
        title: `${entityType} #${payload.entityId}`,
        content: JSON.stringify(payload.data),
      });
      this.logger.debug(`Indexed ${entityType} ${payload.entityId}`);
    } catch (err) {
      this.logger.warn(
        `Search index failed for ${payload.entityType}: ${(err as Error).message}`,
      );
    }
  }

  @OnEvent(EntityEvents.UPDATED)
  async handleUpdated(payload: EntityEventPayload): Promise<void> {
    try {
      const entityType = payload.entityType.toLowerCase();
      await this.search.indexDocument({
        id: `${entityType}_${payload.entityId}`,
        entityType,
        entityId: payload.entityId,
        title: `${entityType} #${payload.entityId}`,
        content: JSON.stringify(payload.data),
      });
    } catch (err) {
      this.logger.warn(
        `Search re-index failed for ${payload.entityType}: ${(err as Error).message}`,
      );
    }
  }

  @OnEvent(EntityEvents.DELETED)
  async handleDeleted(payload: EntityEventPayload): Promise<void> {
    try {
      const entityType = payload.entityType.toLowerCase();
      await this.search.removeDocument(
        entityType,
        `${entityType}_${payload.entityId}`,
      );
    } catch {
      // ignore removal errors
    }
  }
}
