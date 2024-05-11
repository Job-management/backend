const CrawlDataService = require("../services/CrawlData.service");
const catchAsync = require("../utils/catchAsync");
const { success, successPanigation } = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const database = require("../database");
const httpStatus = require("http-status");
const db = database.getDB();

const getDataCrawls = catchAsync(async (req, res) => {
  const page = Number.parseInt(req.query.page)
  const limit = Number.parseInt(req.query.limit)
  if (
    Number.isNaN(page) ||
    page < 1 ||
    Number.isNaN(limit) ||
    limit < 0
  ) {
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid query parameters!");
  }

  const startIndex = (page - 1) * limit

  const params = {
    txt_search: req.query.txt_search
    ? req.query.txt_search.trim()
    : '',
    major_category_id: req.query.major_category_id ? Number.parseInt(req.query.major_category_id) : 'None',
    city: req.query.city ? req.query.city : 'None'
  }

  const rawData = await CrawlDataService.getDataCrawls(startIndex, limit, params);
  const data = rawData.result.map((item, index) => {
    return {
      ...item,
      images: item.images && item.images !== 'None' ? JSON.parse(
        item.images.replaceAll('None', null).replaceAll("'", '"')
      ) : null,
    };
  });
  res.status(httpStatus.OK).send(successPanigation("SUCCESS", data, httpStatus.OK, rawData.total, page, limit));
});

const getDataCrawlById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const data = await CrawlDataService.getDataCrawlById(id);
  data.images = data.images && data.images !== 'None' ? JSON.parse(
    data.images.replaceAll('None', null).replaceAll("'", '"')
  ) : null;
  if (!data) {
    throw new ApiError(httpStatus.NOT_FOUND, "Crawl data not found");
  }

  res.status(httpStatus.OK).send(success("SUCCESS", data, httpStatus.OK));
});

const updateJob = (id, updatedJob) => {
  return db("job_data").where({ id }).update(updatedJob);
};

const getJobByTitle = async () => {
  return await db("job_data")
    .distinct("job_data.job")
    .select("job_data.job")
    .limit(10);
};

const filterJob = async (key1, key2, key3) => {
  let cityKeyword = key3.toLowerCase();

  if (cityKeyword === "hồ chí minh") {
    cityKeyword = "hồ chí minh";
  } else if (
    cityKeyword === "tphcm" ||
    cityKeyword === "tp.hcm" ||
    cityKeyword === "hcm"
  ) {
    cityKeyword = "hồ chí minh";
  }
  console.log(cityKeyword);
  return await db("job_data").whereRaw(
    "LOWER(Title) like ?  AND LOWER(job) like ? AND (LOWER(City) like ? )",
    [
      `%${key1}%`,
      `%${key2}%`,
      `%${cityKeyword}%`,
      // `%tphcm%`,
      // `%hcm%`,
    ]
  );
};

module.exports = {
  getDataCrawls,
  getDataCrawlById,
  updateJob,
  getJobByTitle,
  filterJob,
};
