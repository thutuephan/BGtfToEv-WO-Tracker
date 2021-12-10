const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// view workout
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{ 
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"} // $ before exercises represent the array
        }
    }])

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

// add exercise 


router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        {new: true}
    )
        .then(workout_db =>{
            res.json(workout_db);
        })
        .catch(err => {
            res.json(err);
        })
})


// calculate the sum of total duration of each workout
router.get('/api/workouts/range', (req, res) => {

    Workout.aggregate([{ 
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"} // $ before exercises represent the array
        }
    }])
        .sort({day: -1})
        .limit(7)
        .then(workout_db => {
        res.json(workout_db);
        })
        .catch(err => {
        res.json(err);
        });
    

})  

module.exports = router;