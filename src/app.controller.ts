import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Public } from './common';

@ApiTags('Health')
@Controller()
export class AppController {
  @Public()
  @Get()
  @ApiOperation({ summary: 'Health check' })
  health() {
    return {
      status: 'ok',
      name: 'Marmari API',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
    };
  }
}
