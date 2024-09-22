import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './models/Project';
import { SeederService } from './services/dbService';

@Module({
  imports: [
    ProjectModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
})
export class AppModule {}
