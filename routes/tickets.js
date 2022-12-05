const express = require("express");
const router = require("express").Router();
const ticketCtrl = require("../controllers/tickets");

router.get("/flights/:id/tickets/new", ticketCtrl.new);
router.post("/flights/:id/tickets", ticketCtrl.create);

module.exports = router;
