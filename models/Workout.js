const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    // this const will have date, exercise which includes name, type, sets, weight, reps, duration and distance
    title: String,
    body: String
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Note;
  