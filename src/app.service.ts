import { Get, Injectable, Redirect, Res } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  @Get()
  getHello(): string {
    return `Hello World!`;
  }
}
