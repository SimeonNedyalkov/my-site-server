import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8888;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`App running on port: ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
