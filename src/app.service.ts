import { Injectable } from '@nestjs/common';
import { HealthStatus, AppInfo } from './interfaces/app.interfaces';

@Injectable()
export class AppService {
    private readonly appInfo: AppInfo = {
        name: 'surdo-api',
        version: '1.0.0',
    };

    getHealthStatus(): HealthStatus {
        return {
            status: 'Online',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
            uptime: process.uptime(),
            memory: process.memoryUsage(),
        };
    }

    getAppInfo(): AppInfo {
        return this.appInfo;
    }
}