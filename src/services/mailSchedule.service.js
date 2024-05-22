const database = require("../database");
const db = database.getDB();

async function getAllMailSchedule() {
    return await db("mail_schedule").select("mail_schedule.email").orderBy('mail_schedule.id', 'asc');;
}

async function createMailSchedule(mail) {
    return await db("mail_schedule").insert({email: mail});
}

async function isCheckEmailExist(mail) {
    return await db("mail_schedule").where({email: mail}).first();
};

module.exports = {
    getAllMailSchedule,
    createMailSchedule,
    isCheckEmailExist
}