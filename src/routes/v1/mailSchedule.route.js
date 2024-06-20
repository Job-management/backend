const express = require("express");
const router = express.Router();
const mailScheduleController = require("../../controllers/mailSchedule.Controller");

// create email schedule
router.post("/", mailScheduleController.createMailSchedule);
router.get("/activation/:token", mailScheduleController.verifyMailSchedule);
router.get("/test", mailScheduleController.test)
module.exports = router;