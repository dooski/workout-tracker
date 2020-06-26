// sets up dependencies
var express = require("express")
var { join } = require("path")
const app = express()

// configs express settings
app.use(express.static(join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes
app.use(require("./routes"))
//home
app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "./public/index.html"))
})
//exercise
app.get("/exercise", (req, res) => {
    res.sendFile(join(__dirname, "./public/exercise.html"))
})
//stats
app.get("/stats", (req, res) => {
    res.sendFile(join(__dirname, "./public/stats.html"))
})

//starts the server on port 3000 or the heroku setup after loading the config file; catches and logs rejected promises
require("./config")
    .then(() => app.listen(process.env.PORT || 3000))
    .catch(e => console.error(e))