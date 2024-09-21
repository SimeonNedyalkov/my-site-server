import { Controller, Get, Param } from '@nestjs/common';

@Controller('projects')
export class ProjectController {
  @Get() // all projects
  findAll() {
    return [];
  }
  @Get(':id')
  findSpecific(@Param('id') id: string) {
    return { id };
  }
}
