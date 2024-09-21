import { HydratedDocument } from 'mongoose';
interface ProjectInterface {
    name: string;
    demo: number;
    image: string;
    languagesAndTechnologies: [];
    description: string;
}
export type ProjectDocument = HydratedDocument<ProjectInterface>;
export declare class Project {
    name: string;
    demo: string;
    image: string;
    languagesAndTechnologies: string[];
    description: string;
}
export declare const ProjectSchema: import("mongoose").Schema<Project, import("mongoose").Model<Project, any, any, any, import("mongoose").Document<unknown, any, Project> & Project & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Project, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Project>> & import("mongoose").FlatRecord<Project> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export {};
