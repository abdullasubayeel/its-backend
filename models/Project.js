const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  description: String,
  managerId: String,
  tickets: { type: Array, default: [] },
  employees: { type: Array, default: [] },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
