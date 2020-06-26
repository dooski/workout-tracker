//sets up the router to do that ol routing and links the workout model
var router = require("express").Router()
var { Workout } = require("../models")

//GET request for all workouts and catches promise rejections
router.get("/workouts", (req, res) => {
    Workout.find()
        .then(workouts => res.json(workouts))
        .catch(e => console.error(e))
})

//GET request for workouts in a range, limit of 7 and catches promise rejections
router.get("/workouts/range", (req, res) => {
    Workout.find().limit(7)
        .then(workout => res.json(workout))
        .catch(e => console.error(e))
    console.log(req.body)
})

// POST request for one workout and catches promise rejections
router.post("/workouts", (req, res) => {
    Workout.create({ day: new Date() })
        .then((data) => res.json(data))
        .catch(e => console.error(e))
})

// PUT request for one exercise in a workout
router.put("/workouts/:id", (req, res) => {
    console.log(req.params.id)
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
})

module.exports = router

