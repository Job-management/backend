const cron = require("node-cron");
const mailService = require("../services/mailService");
const mailScheduleService = require("../services/mailSchedule.service")
const config = require("../config");

const sendMail = async () => {
    try {
      const mailOptions = {
        emailFrom: config.MAIL_OWNER,
        emailTo: config.MAIL_TEST,
        subject: "Here is your job link",
        text: `Click here: https://blog.greenroots.info/send-and-schedule-e-mails-from-a-nodejs-app`,
      };
      try {
        const listMailSchedule = await mailScheduleService.getAllMailSchedule();
        for (const oItem of listMailSchedule) {
          mailOptions.emailTo = oItem.email
          await mailService.sendEmail(mailOptions);
          console.log("Email sent successfully");
        }
       
      } catch (error) {
        console.log("Failed to send email" || "Internal server error");
      }
    } catch (error) {
      console.log(error);
    }
};

const cronJob = cron.schedule('* * 1 * *', () => {
    sendMail();
    console.log('running a task every day');
});

module.exports = cronJob;