import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Status.', description: 'Retorna status e metadata da API.' })
  @ApiResponse({ status: 200, description: 'Status retornado com sucesso.' })
  getInfo() {
    return this.appService.getInfo();
  }
}
