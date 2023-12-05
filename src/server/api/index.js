const router = require("express").Router()

router.use("/robot", require("./robotDetails"))

router.use("/task", require("./robotTask.js"))

module.exports = router;