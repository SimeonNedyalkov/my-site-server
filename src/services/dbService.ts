import { ProjectSchema } from '../models/Project';

// async function getAllProjects() {
//   return Project.find().lean();
// }

// async function getProjectById(id) {
//   return Project.findById(id).lean();
// }

// async function create(data, authorId) {
//   const record = new Project({
//     name: data.name,
//     demo: data.demo,
//     image: data.image,
//     languagesAndTechnologies: data.languagesAndTechnologies,
//     description: data.description,
//   });
//   await record.save();
//   return record;
// }

// async function update(projectId, data, authorId) {
//   const record = await Project.findById(projectId);
//   if (!record) {
//     throw new Error('Project not found');
//   }

//   record.name = data.name;
//   record.demo = data.demo;
//   record.image = data.image;
//   record.languagesAndTechnologies = data.languagesAndTechnologies;
//   record.description = data.description;
//   console.log(record);
//   await record.save();
//   return record;
// }

// async function deleteById(id) {
//   const record = await Project.findById(id);
//   if (!record) {
//     throw new ReferenceError(`Record not found ` + id);
//   }
//   await Project.findByIdAndDelete(id);
// }

// module.exports = {
//   getAllProjects,
//   getProjectById,
//   create,
//   update,
//   deleteById,
// };
