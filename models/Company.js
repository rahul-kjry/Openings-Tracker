const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  applications: [{ type: String }],
  referrals: [{ type: String }],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
