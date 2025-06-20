
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../generated/prisma';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await this.$connect();
  }
}
