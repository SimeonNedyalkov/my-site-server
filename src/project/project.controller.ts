import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '../models/Project';
@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}
  @Get() // get all projects
  findAll(): {} {
    return this.projectService.findAll();
  }
  @Get(':id') // get one project
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }
  @Post() // create one project
  create(@Body() project: Project) {
    return this.projectService.createOne(project);
  }
  @Patch(':id') // update one project
  patchOne(@Param('id') id: string, @Body() updatedProject: {}) {
    return this.projectService.patchOne(id, { ...updatedProject });
  }
  @Delete(':id') //delete one project
  deleteOne(@Param('id') id: string) {
    return this.projectService.deleteOne(id);
  }
}
