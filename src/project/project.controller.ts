import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '../models/Project';
@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}
  @Get() // all projects
  findAll(): {} {
    return this.projectService.findAll();
  }
  @Get(':id') // one project
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }
  @Post() // one project
  create(@Body() project: Project) {
    return project;
  }
  @Patch(':id') // one project
  patchOne(@Param('id') id: string, @Body() updatedProject: {}) {
    return this.projectService.patchOne(id, { ...updatedProject });
  }
}
