const express = require("express");
const router = express.Router();
const flightCtrl = require("../controllers/flights");

/* GET users listing. */
router.get("/new", flightCtrl.new);
router.get("/", flightCtrl.index);
router.post("/", flightCtrl.create);
// need to tell server what to do with post request
router.get("/:id", flightCtrl.show);

// add destination feature
router.post("/:id/destinations", flightCtrl.addDestination);

// add ticket
// router.post("/:id/ticket", flightCtrl.addTicket);

module.exports = router;
