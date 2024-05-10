const database = require("../database");
const db = database.getDB();

const getDataCrawls = async (startIndex, limit, params) => {
  let query = db("crawl_data")
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
      "crawl_data.contact",
      "crawl_data.major_category_id"
    )
    .where(function() {
      this.where("crawl_data.title", "like", `%${params.txt_search}%`)
          .orWhere("crawl_data.job", "like", `%${params.txt_search}%`)
          .orWhere("crawl_data.description", "like", `%${params.txt_search}%`)
          .orWhere("crawl_data.education", "like", `%${params.txt_search}%`)
          .orWhere("crawl_data.experience", "like", `%${params.txt_search}%`)
          .orWhere("crawl_data.place", "like", `%${params.txt_search}%`);
    })

    if (params.major_category_id !== 'None') {
      query = query.where("crawl_data.major_category_id", params.major_category_id)
    }

    if (params.city !== 'None') {
      query = query.where("crawl_data.city", params.city)
    }

    const totalCountQuery = await db("crawl_data").count("crawl_data.id as total");
    const total = totalCountQuery[0].total;
  
    query = query.offset(startIndex).limit(limit);
  
    const result = await query.orderBy("crawl_data.time", "desc");
    
    return { total, result };
};


const getDataCrawlById = async (id) => {
  return await db("crawl_data").where({ id }).first();
};

module.exports = { getDataCrawls, getDataCrawlById };
