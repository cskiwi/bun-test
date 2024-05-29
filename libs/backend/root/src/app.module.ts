import { Module } from '@nestjs/common';
import { BackendTestModule } from '@backend/test';

@Module({
  imports: [BackendTestModule],
  controllers: [],
})
export class AppModule {}

