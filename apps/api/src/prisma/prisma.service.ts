import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@creator-os/database';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
