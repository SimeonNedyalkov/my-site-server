import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import config from './config/databaseConfig';
const PORT = 8888;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`App running on port: ${PORT}`);
  // await config.databaseConfig();
  await app.listen(PORT);
}
bootstrap();
