const express = require("express")
const router = express.Router()

const processInitController = require("../controllers/processInitController")

router.get('/init', processInitController.initProcess)

module.exports = router