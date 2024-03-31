import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app/app.module';

const isProduction = process.env.NODE_ENV === 'production';

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
    origin: isProduction ? 'https://tomcruz.dev' : '*',
  });

  await app.listen(3000);
}

bootstrap();
