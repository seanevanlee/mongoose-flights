const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  new: newFlight,
  create,
  index,
  show,
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

function show(req, res) {
  Flight.findById(req.params.id, function (err, flightDoc) {
    console.log(flightDoc);

    res.render("flights/show", { title: "Flight Details", flight: flightDoc });
  });
}

function create(req, res) {
  console.log(req.body, "contents of the form");

  Flight.create(req.body, function (err, flightDoc) {
    if (err) {
      console.log(err);
      return res.send("err creating so check the terminal");
    }
    // else {
    console.log(flightDoc);
    res.redirect("/flights");
    // }
  });
}

function newFlight(req, res) {
  const newFlight = new Flight();
  res.render("flights/new", { defaultDeparture: newFlight.departs });
}
