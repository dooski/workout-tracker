//uses express router for html routing
var router = require("express").Router()

router.use("/api", require("./routine.js"))

module.exports = router