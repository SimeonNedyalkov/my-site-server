"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Schema, model, Types } = require('mongoose');
const projectSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    demo: {
        type: Number,
        required: [true, 'Category is required'],
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    languagesAndTechnologies: {
        type: String,
        enum: [
            'JavaScript',
            'TypeScript',
            'MongoDb',
            'Express',
            'Python',
            'HTML5',
            'CSS3',
            'Node.js',
            'Angular',
            'React',
        ],
        required: [true, 'Formula is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
});
const Project = model('Project', projectSchema);
exports.default = Project;
//# sourceMappingURL=Project.js.map