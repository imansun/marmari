import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { SearchQueryDto } from './dto/search.dto';

@ApiTags('Search')
@ApiBearerAuth()
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get(':entityType')
  @ApiOperation({ summary: 'Full-text search across an entity type' })
  async search(
    @Param('entityType') entityType: string,
    @Query() query: SearchQueryDto,
  ) {
    return this.searchService.search(
      entityType,
      query.q,
      query.page || 1,
      query.limit || 20,
    );
  }
}
