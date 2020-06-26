// sets up dependencies
var express = require("express");
var mongoose = require("mongoose");
var path = require("path")


// configs standard express settings
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes
app.use(require("./routes/routine.js"))
//home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
//exercise
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
})
//stats
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"))
})

// sets up mongoose for either heroku use or localhost
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// listens and tells me its listening, like a good app should
app.listen(PORT, () => {
    console.log(`site running on port ${PORT}`);
});