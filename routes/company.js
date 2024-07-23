const express = require("express");
const Company = require("../models/Company");

const router = express.Router();

// Get all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new company
router.post("/", async (req, res) => {
  const company = new Company({
    name: req.body.name,
    applications: req.body.applications,
    referrals: req.body.referrals,
  });

  try {
    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
