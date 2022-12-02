const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flights");
const { countDocuments } = require("../models/flight");

/* GET users listing. */
router.get("/new", flightCtrl.new);
router.get("/", flightCtrl.index);

module.exports = router;
