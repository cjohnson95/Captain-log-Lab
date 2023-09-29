const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  title: String,
  entry: String,
  shipIsBroken: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Log", logSchema);
