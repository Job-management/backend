const database = require("../database");
const db = database.getDB();

const getDataCrawls = async () => {
  return await db("crawl_data")
    .select(
      "crawl_data.id",
      "crawl_data.title",
      "crawl_data.time",
      "crawl_data.city",
      "crawl_data.age",
      "crawl_data.sexual",
      "crawl_data.probationTime",
      "crawl_data.workWay",
      "crawl_data.right",
      "crawl_data.company",
      "crawl_data.job",
      "crawl_data.place",
      "crawl_data.numberEmployees",
      "crawl_data.experience",
      "crawl_data.level",
      "crawl_data.salary",
      "crawl_data.education",
      "crawl_data.description",
      "crawl_data.requirements",
      "crawl_data.deadline",
      "crawl_data.images",
      "crawl_data.link",
      "crawl_data.type",
      "crawl_data.contact"
    )
    .orderBy("crawl_data.time", "desc");
};

const getDataCrawlById = async (id) => {
  return await db("crawl_data").where({ id }).first();
};

module.exports = { getDataCrawls, getDataCrawlById };
