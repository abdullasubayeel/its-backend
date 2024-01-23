const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new Schema({
  roles: {
    Manager: {
      type: Number,
      default: 2000,
    },
  },
  fullName: String,
  username: String,
  email: String,
  projects: { type: Array, default: [] },
  developers: { type: Array, default: [] },
  refreshToken: String,
});

const Manager = mongoose.model("Manager", managerSchema);
module.exports = Manager;
