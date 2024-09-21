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
//   name: {
//     type: String,
//     required: [true, 'Name is required'],
//   },
//   demo: {
//     type: Number,
//     required: [true, 'Category is required'],
//   },
//   image: {
//     type: String,
//     required: [true, 'Image is required'],
//   },

//   languagesAndTechnologies: {
//     type: String,
//     enum: [
//       'JavaScript',
//       'TypeScript',
//       'MongoDb',
//       'Express',
//       'Python',
//       'HTML5',
//       'CSS3',
//       'Node.js',
//       'Angular',
//       'React',
//     ],
//     required: [true, 'Formula is required'],
//   },
//   description: {
//     type: String,
//     required: [true, 'Description is required'],
//   },
// });

// const Project = model('Project', projectSchema);

// export default Project;
export const ProjectSchema = SchemaFactory.createForClass(Project);
