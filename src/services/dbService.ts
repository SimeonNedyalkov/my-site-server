import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';
import * as path from 'path';

import { Project } from '../models/Project';

@Injectable()
export class SeederService implements OnModuleInit {
  private readonly logger = new Logger(SeederService.name);

  constructor(
    @InjectModel(Project.name) private productModel: Model<Project>,
  ) {}

  async onModuleInit() {
    await this.loadSeedData();
  }

  private async loadSeedData() {
    try {
      await this.seedProjects();
      this.logger.log('Seeding completed.');
    } catch (err) {
      this.logger.error('Seeding failed', err);
    }
  }

  private async seedProjects() {
    const productsFilePath = path.join(
      __dirname,
      '../../src/seeds/projects.seed.json',
    );
    const productsData = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

    const existingProducts = await this.productModel.countDocuments();
    if (existingProducts === 0) {
      await this.productModel.insertMany(productsData);
      this.logger.log(
        `Inserted ${productsData.length} projects into the database.`,
      );
    } else {
      this.logger.log('Projects already exist, skipping product seeding.');
    }
  }
}
