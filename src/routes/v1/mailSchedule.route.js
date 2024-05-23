const express = require("express");
const router = express.Router();
const mailScheduleController = require("../../controllers/mailSchedule.Controller");

// create email schedule
router.post("/", mailScheduleController.createMailSchedule);

module.exports = router;