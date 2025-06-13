import { Module } from '@nestjs/common';
import { UserModule } from './infra/http/modules/user/user.module';
import { DatabaseModule } from './infra/database/Database.Module';

@Module({
  imports: [UserModule, DatabaseModule],
})
export class AppModule {}
