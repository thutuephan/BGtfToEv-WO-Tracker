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

// add exercise 


router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findOneAndUpdate(
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


// i need ot order result
// app.post("/submit", ({ body }, res) => {
//     db.Note.create(body)
//       .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  

module.exports = router;