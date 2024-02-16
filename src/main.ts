import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from "./app.service";
import { Middleware } from "./middleware";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);
  app.use(Middleware(appService));
  await app.listen(3000);
}
bootstrap();
