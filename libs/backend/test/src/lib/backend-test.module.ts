import { Module } from '@nestjs/common';
import { BackendTestController } from './backend-test.controller';
import { BackendTestService } from './backend-test.service';

@Module({
  controllers: [BackendTestController],
  providers: [BackendTestService],
  exports: [BackendTestService],
})
export class BackendTestModule {}
