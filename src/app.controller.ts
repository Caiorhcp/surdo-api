import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHealthStatus() {
        return {
            status: 'online',
            timestamp: new Date().toISOString(),
            enviroment: process.env.NODE_ENV || 'development',
        };
    }
}