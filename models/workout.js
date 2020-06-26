var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const workoutScheme = new Schema({
    day: {
        type: Date,
        required: true
    },
    exercises: [{
        type: { type: String },
        name: { type: String },
        duration: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number }
    }]
})