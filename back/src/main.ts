import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  
  // 環境変数からポート番号を取得
  const port = configService.get<number>('PORT') || 8000;

  const allowedOrigins = configService.get<string>('ALLOWED_ORIGINS')?.split(',') || [];

  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(port);
}

bootstrap();
