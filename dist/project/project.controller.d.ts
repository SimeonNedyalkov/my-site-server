import { ProjectService } from './project.service';
import { Project } from '../models/Project';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    findAll(): {};
    findOne(id: string): Promise<Project>;
    create(project: Project): Project;
    patchOne(id: string, updatedProject: {}): Promise<Project>;
}
