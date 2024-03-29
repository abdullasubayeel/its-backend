const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const developerSchema = new Schema({
  roles: {
    Developer: {
      type: Number,
      default: 2023,
    },
  },
  fullName: String,
  username: String,

  managerId: String,
  email: String,
  projectsAssigned: { type: Array, default: [] },
  ticketsAssigned: { type: Array, default: [] },
  refreshToken: String,
});

const Developer = mongoose.model("Developer", developerSchema);
module.exports = Developer;
