import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthStatus, AppInfo } from './interfaces/app.interfaces';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHealthStatus(): HealthStatus {
        return this.appService.getHealthStatus();
    }

    @Get('version')
    getVersion(): AppInfo {
        return this.appService.getAppInfo();
    }
}