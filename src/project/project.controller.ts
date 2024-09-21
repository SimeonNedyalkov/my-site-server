import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}
  @Get() // all projects
  findAll(): {} {
    return this.projectService.findAll();
  }
}
