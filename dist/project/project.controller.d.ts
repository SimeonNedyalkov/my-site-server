import { ProjectService } from './project.service';
export declare class ProjectController {
    private projectService;
    constructor(projectService: ProjectService);
    findAll(): {};
    findOne(id: string): Promise<import("../models/Project").Project>;
}
