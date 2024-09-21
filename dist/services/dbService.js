"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = require("../models/Project");
async function getAllProjects() {
    return Project_1.default.find().lean();
}
async function getProjectById(id) {
    return Project_1.default.findById(id).lean();
}
async function create(data, authorId) {
    const record = new Project_1.default({
        name: data.name,
        demo: data.demo,
        image: data.image,
        languagesAndTechnologies: data.languagesAndTechnologies,
        description: data.description,
    });
    await record.save();
    return record;
}
async function update(projectId, data, authorId) {
    const record = await Project_1.default.findById(projectId);
    if (!record) {
        throw new Error('Project not found');
    }
    record.name = data.name;
    record.demo = data.demo;
    record.image = data.image;
    record.languagesAndTechnologies = data.languagesAndTechnologies;
    record.description = data.description;
    console.log(record);
    await record.save();
    return record;
}
async function deleteById(id) {
    const record = await Project_1.default.findById(id);
    if (!record) {
        throw new ReferenceError(`Record not found ` + id);
    }
    await Project_1.default.findByIdAndDelete(id);
}
module.exports = {
    getAllProjects,
    getProjectById,
    create,
    update,
    deleteById,
};
//# sourceMappingURL=dbService.js.map