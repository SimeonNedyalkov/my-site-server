import { OnModuleInit } from '@nestjs/common';
import { Model } from 'mongoose';
import { Project } from '../models/Project';
export declare class SeederService implements OnModuleInit {
    private productModel;
    private readonly logger;
    constructor(productModel: Model<Project>);
    onModuleInit(): Promise<void>;
    private loadSeedData;
    private seedProjects;
}
