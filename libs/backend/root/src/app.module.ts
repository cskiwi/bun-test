import { Module } from '@nestjs/common';
import { BackendTestModule } from '@app/backend-test';
import { RoutesGeneratorModule } from '@app/backend-routes-generator';

@Module({
  imports: [BackendTestModule, RoutesGeneratorModule],
  controllers: [],
})
export class AppModule {}

