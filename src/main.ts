import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { NestExpressApplication } from '@nestjs/platform-express';
import { GlobalExceptionFilter } from './exceptionFilters/exception-handler.filter';
import { ZodErrorFilter } from './exceptionFilters/zod-handler.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { AxiosExceptionFilter } from './exceptionFilters/axios-exception.filter';

async function bootstrap() {
  configDotenv();

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'warn', 'log'],
  });

  app.useGlobalFilters(
    new GlobalExceptionFilter(),
    new ZodErrorFilter(),
    new AxiosExceptionFilter(),
  );

  const config = new DocumentBuilder()
    .setTitle('Mava Task API Documentation')
    .setDescription('Mava Task API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(3000);
  Logger.log(`Server running on ${process.env.MAIN_URL}`, 'Bootstrap');
}
bootstrap();
