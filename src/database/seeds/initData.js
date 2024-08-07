/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("crawl_data").del();
  await knex("crawl_data").insert([
    {
      id: 1,
      title: "[DANANG] Meta Technology Lab vẫn cần tuyển",
      time: "tháng 5/2024",
      city: "Đà Nẵng",
      age: "",
      sexual: "",
      probationTime: "",
      workWay: "",
      right: "",
      company: "Meta Technology Lab",
      job: "Project manager",
      place: "",
      numberEmployees: 1,
      experience: "",
      level: "",
      salary: "upto 3k5",
      education: "",
      description: "",
      requirements: "3 năm+ kinh nghiệm về tham gia dự án game",
      deadline: "",
      images: "",
      link: "",
      type: "facebook",
      contact: "Mail: hr@metatechnologylab.io, Zalo: 0336 256 356, Skype: live:.cid.7d8bc6574e23c88b",
    },
    {
      id: 2,
      title: "[DANANG] Meta Technology Lab vẫn cần tuyển",
      time: "tháng 5/2024",
      city: "Đà Nẵng",
      age: "",
      sexual: "",
      probationTime: "",
      workWay: "",
      right: "",
      company: "Meta Technology Lab",
      job: "Blockchain",
      place: "",
      numberEmployees: 1,
      experience: "",
      level: "",
      salary: "upto 3k5",
      education: "",
      description: "",
      requirements: "3 năm+ kinh nghiệm về tham gia dự án game",
      deadline: "",
      images: "",
      link: "",
      type: "facebook",
      contact: "Mail: hr@metatechnologylab.io, Zalo: 0336 256 356, Skype: live:.cid.7d8bc6574e23c88b",
    },
    {
      id: 3,
      title: "[DANANG] Meta Technology Lab vẫn cần tuyển",
      time: "tháng 5/2024",
      city: "Đà Nẵng",
      age: "",
      sexual: "",
      probationTime: "",
      workWay: "",
      right: "",
      company: "Meta Technology Lab",
      job: "Cloud infrastructure",
      place: "",
      numberEmployees: 1,
      experience: "",
      level: "",
      salary: "upto 3k5",
      education: "",
      description: "",
      requirements: "3 năm+ kinh nghiệm về tham gia dự án game",
      deadline: "",
      images: "",
      link: "",
      type: "facebook",
      contact: "Mail: hr@metatechnologylab.io, Zalo: 0336 256 356, Skype: live:.cid.7d8bc6574e23c88b",
    },,
  ]);
};
