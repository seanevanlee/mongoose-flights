const express = require("express");
const router = require("express").Router();
const ticketCtrl = require("../controllers/tickets");

router.get("/new", ticketCtrl.new);
router.post("/", ticketCtrl.create);
router.get("/:id", ticketCtrl.show);

module.exports = router;

// http://localhost:3000/tickets/638d5fb57ef46a1a3ddb73fc/ticket

// http://localhost:3000/flights/undefined
