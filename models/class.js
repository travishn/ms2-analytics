const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  acquiredLvl: {
    type: Number,
    required: [true, 'Acquired level field is required']
  },
  maxLvl: {
    type: Number,
    required: [true, 'Acquired level field is required']
  },
  active: {
    type: Boolean,
    default: true
  },
  imageURL: {
    type: String,
    default: 'https://res.cloudinary.com/emanon/image/upload/v1539289913/Unknown.png'
  }
});

const ClassSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  skills: [SkillSchema]
});

const Class = mongoose.model('class', ClassSchema);

module.exports = Class;