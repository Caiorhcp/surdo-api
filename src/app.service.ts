import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    private readonly appInfo = {
        name: 'surdo-api',
        version: '1.0.0',
    };

    getAppInfo(): Record<string, any> {
        return this.appInfo;
    }
}