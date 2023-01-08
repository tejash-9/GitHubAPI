import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';


const server = express();
server.set('view engine', 'ejs');
server.set('views', join(__dirname, '..' , 'views'));

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );
  await app.listen(8000);
}
bootstrap();
