const mongoose = require('mongoose');
require('../models/Project');

async function databaseConfig() {
  try {
    await mongoose.connect('mongodb://localhost:27017/project');
    console.log('Database connected');
  } catch (error) {
    console.log(error.message);
  }
}
const config = { databaseConfig };
export default config;
