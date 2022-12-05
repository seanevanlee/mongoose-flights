const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  new: newFlight,
  create,
  index,
  show,
  addDestination,
};

// add destination within flight info

function addDestination(req, res, next) {
  console.log("adding destination here", req.body, req.params);
  Flight.findById(req.params.id, function (err, flight) {
    flight.destinations.push(req.body);
    flight.save(function (err, result) {
      console.log("flight from add destination to somewhere", flight);
      res.redirect(`/flights/${flight._id}`);
    });
  });
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
      return res.send("go check the terminal err");
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

function newFlight(req, res) {
  res.render("flights/new");
}
