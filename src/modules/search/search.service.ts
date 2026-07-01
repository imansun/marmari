import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ConfigService } from '@nestjs/config';

export interface IndexDocument {
  id: string;
  entityType: string;
  entityId: string;
  title: string;
  content: string;
  tags?: string[];
  metadata?: Record<string, unknown>;
}

@Injectable()
export class SearchService implements OnModuleDestroy {
  private readonly indexPrefix: string;

  constructor(
    private readonly es: ElasticsearchService,
    private readonly config: ConfigService,
  ) {
    this.indexPrefix = this.config.get<string>('app.nodeEnv', 'development');
  }

  private getIndex(entityType: string): string {
    return `${this.indexPrefix}_${entityType}`;
  }

  async ensureIndex(entityType: string): Promise<void> {
    const index = this.getIndex(entityType);
    const exists = await this.es.indices.exists({ index });
    if (!exists) {
      await this.es.indices.create({
        index,
        settings: { number_of_shards: 1, number_of_replicas: 0 },
        mappings: {
          properties: {
            id: { type: 'keyword' },
            entityType: { type: 'keyword' },
            entityId: { type: 'keyword' },
            title: { type: 'text', analyzer: 'standard' },
            content: { type: 'text', analyzer: 'standard' },
            tags: { type: 'keyword' },
            metadata: { type: 'object', enabled: false },
            createdAt: { type: 'date' },
          },
        },
      });
    }
  }

  async indexDocument(doc: IndexDocument): Promise<void> {
    await this.ensureIndex(doc.entityType);
    const index = this.getIndex(doc.entityType);
    await this.es.index({
      index,
      id: doc.id,
      document: { ...doc, createdAt: new Date() },
      refresh: 'wait_for',
    });
  }

  async removeDocument(entityType: string, id: string): Promise<void> {
    const index = this.getIndex(entityType);
    try {
      await this.es.delete({ index, id });
    } catch {
      // document might not exist
    }
  }

  async search(entityType: string, query: string, page = 1, limit = 20) {
    const index = this.getIndex(entityType);
    const from = (page - 1) * limit;

    const result = await this.es.search({
      index,
      from,
      size: limit,
      query: {
        multi_match: {
          query,
          fields: ['title^3', 'content', 'tags^2'],
          fuzziness: 'AUTO',
        },
      },
      highlight: {
        fields: { title: {}, content: {} },
      },
    });

    const hits = result.hits.hits;
    const total =
      typeof result.hits.total === 'object'
        ? result.hits.total.value
        : (result.hits.total ?? 0);

    return {
      data: hits.map((h) => ({
        id: h._id,
        score: h._score,
        source: h._source,
        highlights: h.highlight,
      })),
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async onModuleDestroy(): Promise<void> {
    await this.es.close();
  }
}
