const knex = require("knex");
const config = require("../config/knex/knexfile");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const mailScheduleService = require("../services/mailSchedule.service")

async function createMailSchedule(req, res) {
    try {
        // Check valid request
        const mail = req.body.mail;
        if (mail == null || mail == undefined) {
            return res.status(httpStatus.BAD_REQUEST).json({ error: "Validation failed!" });
        }
        // Check email exist
        const isCheckExist = await mailScheduleService.isCheckEmailExist(mail);
        if(isCheckExist) {
            return res.status(httpStatus.BAD_REQUEST).json({ error: "Email already exists!" });
        }
        //create record
        await mailScheduleService.createMailSchedule(mail);
        return res.status(201).json({ message: "mail schedule created" });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createMailSchedule
};