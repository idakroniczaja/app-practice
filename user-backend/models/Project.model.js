const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    title: String,
    description:String,
    author:String,
    imageUrl:String
  },
  {
    timestamps: true
  }
);

module.exports = model('Project', projectSchema);
