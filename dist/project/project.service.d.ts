import { Model } from 'mongoose';
import { Project } from 'src/models/Project';
export declare class ProjectService {
    private projectModel;
    constructor(projectModel: Model<Project>);
    findAll(): Promise<Project[]>;
    findOne(id: any): Promise<Project>;
    patchOne(id: string, body: Partial<Project>): Promise<Project>;
}
