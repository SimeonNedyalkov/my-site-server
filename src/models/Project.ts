import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

interface ProjectInterface {
  name: string;
  demo: number;
  image: string;
  languagesAndTechnologies: [];
  description: string;
}
export type ProjectDocument = HydratedDocument<ProjectInterface>;
@Schema()
export class Project {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  demo: string;
  @Prop({ required: true })
  image: string;
  @Prop({ required: true })
  languagesAndTechnologies: string[];
  @Prop({ required: true })
  description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
