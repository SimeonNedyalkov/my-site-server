import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from 'src/models/Project';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}
  async findAll(): Promise<Project[]> {
    return this.projectModel.find().exec();
  }
  async findOne(id): Promise<Project> {
    return this.projectModel.findById(id);
  }
}
