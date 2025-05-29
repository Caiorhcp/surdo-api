import { Injectable } from "@nestjs/common";

interface HealthStatus {
    status: string;
    timestamp: string;
    environment: string;
    uptime: number;
    memory: NodeJS.MemoryUsage;
}

@Injectable()
export class AppService {
    private readonly appInfo = {
        name: 'surdo-api',
        version: '1.0.0',
    };

    getHealthStatus(): HealthStatus {
        return {
            status: 'Online',
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV || 'development',
            uptime:process.uptime(),
            memory: process.memoryUsage(),
        };
    }

    getAppInfo(): Record<string, any> {
        return this.appInfo;
    }
}