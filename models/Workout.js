const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    // this const will have date, exercise which includes name, type, sets, weight, reps, duration and distance
    day: {
        type: Date,
        default: new Date(Date.now()),
    },

    exercises: [{
        type: {
            type: String,
            trim: true,  // Use trim so that will remove any whitespace that is sent to the database..., "trim" ony work for string, doesn't work for number
            required: 'Enter exercise type'
        },
        name: {
            type: String,
            trim: true,
            required: 'Enter exercise name'
        },
        duration: {
            type: Number,
            trim: true,
            required: 'Enter duration in minutes'

        },
        weight: {
            type: Number

        },
        reps: {
            type: Number

        },
        sets: {
            type: Number

        },
        distance: {
            type: Number
        }

    }]
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;
  