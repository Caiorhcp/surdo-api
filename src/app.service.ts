import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    private readonly appInfo = {
        name: 'surdo-api',
        version: '1.0.0',
    };

    getHealthStatus(): Record<string, any> {
        return {
            status: 'Online',
            timestamp: new Date().toISOString(),
            uptime:process.uptime(),
            memory: process.memoryUsage(),
        };
    }
    
    getAppInfo(): Record<string, any> {
        return this.appInfo;
    }
}