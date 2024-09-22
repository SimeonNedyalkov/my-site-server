"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SeederService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fs = require("fs");
const path = require("path");
const Project_1 = require("../models/Project");
let SeederService = SeederService_1 = class SeederService {
    constructor(productModel) {
        this.productModel = productModel;
        this.logger = new common_1.Logger(SeederService_1.name);
    }
    async onModuleInit() {
        await this.loadSeedData();
    }
    async loadSeedData() {
        try {
            await this.seedProjects();
            this.logger.log('Seeding completed.');
        }
        catch (err) {
            this.logger.error('Seeding failed', err);
        }
    }
    async seedProjects() {
        const productsFilePath = path.join(__dirname, '../../src/seeds/projects.seed.json');
        const productsData = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        const existingProducts = await this.productModel.countDocuments();
        if (existingProducts === 0) {
            await this.productModel.insertMany(productsData);
            this.logger.log(`Inserted ${productsData.length} projects into the database.`);
        }
        else {
            this.logger.log('Projects already exist, skipping product seeding.');
        }
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = SeederService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Project_1.Project.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SeederService);
//# sourceMappingURL=dbService.js.map