import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app/app.module';

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

  const domains = ['tomcruz.dev'];
  if (process.env.NODE_ENV !== 'production')
    domains.push('http://localhost:3001');

  app.enableCors({
    origin: domains,
  });

  await app.listen(3000);
}

bootstrap();
