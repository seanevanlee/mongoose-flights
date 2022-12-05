const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flights");
const { countDocuments } = require("../models/flight");

/* GET users listing. */
router.get("/new", flightCtrl.new);
router.get("/", flightCtrl.index);
router.post("/", flightCtrl.create);
// need to tell server what to do with post request
module.exports = router;
