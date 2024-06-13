const knex = require("knex");
const config = require("../config/knex/knexfile");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const mailScheduleService = require("../services/mailSchedule.service");
const { testMailTemplate } = require("../utils/EmailTemplates");
const { DEFAULT_AVATAR, SMTP_MAIL, APP_NAME } = require("../config");
const mailService = require("../services/mailService");

async function createMailSchedule(req, res) {
  try {
    // Check valid request
    const mail = req.body.mail;
    if (mail == null || mail == undefined) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "Validation failed!" });
    }
    // Check email exist
    const isCheckExist = await mailScheduleService.isCheckEmailExist(mail);
    if (isCheckExist) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "Email already exists!" });
    }
    //create record
    await mailScheduleService.createMailSchedule(mail);
    return res.status(201).json({ message: "mail schedule created" });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function test(req, res) {
  const mailOptions = {
    emailFrom: SMTP_MAIL,
    emailTo: "vanthanhhuynhtk@gmail.com",
    subject: `Welcome to Please Verify Your Account`,
    text: `Click here to verify your account`,
    html: testMailTemplate,
  };
  try {
    await mailService.sendEmail(mailOptions);
    return res.status(201).json({
      status: "Success",
    });
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Internal server error"
    );
  }
}

module.exports = {
  createMailSchedule,
  test,
};
