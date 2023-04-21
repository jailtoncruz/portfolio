import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Portifolio API')
    .setDescription('The portfolio tomcruz.dev API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.use(helmet());
  app.enableCors({
    origin: 'tomcruz.dev'
  });

  await app.listen(3000);
}

bootstrap();
