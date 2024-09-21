import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}
  @Get() // all projects
  findAll(): {} {
    return this.projectService.findAll();
  }
  @Get(':id') // one project
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.projectService.findOne(id);
  }
}
