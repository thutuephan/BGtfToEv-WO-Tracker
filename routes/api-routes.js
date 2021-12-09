const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// view workout
router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .then(workout_db => {
        res.json(workout_db);
        })
        .catch(err => {
        res.json(err);
        });
    
});

// create workout
router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(workout_db => {
            res.json(workout_db);
        })
        .catch(err => {
            res.json(err);
        });
});


module.exports = router;