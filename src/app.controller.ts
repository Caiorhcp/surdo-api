import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('health')
    getHealthStatus(): Record<string, any> {
        return this.appService.getHealthStatus();
    }

}