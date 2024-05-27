import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/backend-root';
import { Logger } from '@nestjs/common';

export default async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: 'GET',
    maxAge: 3600
  });
  app.setGlobalPrefix('api');
  const port = process.env['PORT'] || 3000;

  await app.listen(port);

  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}

bootstrap();