const Flight = require("../models/flight");

module.exports = {
  new: newFlight,
  create,
  index,
};

function newFlight(req, res) {
  res.render("flights/new");
}

function index(req, res) {
  Flight.find({}, function (err, flightDocs) {
    console.log(flightDocs);
    res.render("flights/index", { flights: flightDocs, name: "Avion" });
  });
}

function create(req, res) {}
