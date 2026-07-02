import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ConfigService } from '@nestjs/config';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import { SearchIndexSubscriber } from '../../database/subscribers/search-index.subscriber';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        node: config.get<string>('ELASTICSEARCH_NODE', 'http://localhost:9200'),
        auth: {
          username: config.get<string>('ELASTICSEARCH_USERNAME', ''),
          password: config.get<string>('ELASTICSEARCH_PASSWORD', ''),
        },
      }),
    }),
  ],
  controllers: [SearchController],
  providers: [SearchService, SearchIndexSubscriber],
  exports: [SearchService],
})
export class SearchModule {}
