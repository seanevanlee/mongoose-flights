const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  new: newTicket,
  create,
  show,
};

function create(req, res) {
  req.body.flight = req.params.id;
  Ticket.create(req.body, function (err, ticketDoc) {
    if (err) {
      console.log("====");
      console.log(err);
      console.log("====");

      return res.send("go check the terminal err");
    }
    console.log("====");
    console.log(ticketDoc);
    console.log("====");
    res.redirect(`/flights/${req.params.id}`);
  });
}
function newTicket(req, res) {
  res.render("tickets/new", { flight: req.params.id });
}

function show(req, res) {
  Ticket.findById(req.params.id, function (err, ticketDoc) {
    // pass in ID to ticket and get info from endpt
    console.log(ticketDoc);

    res.render("flights/show", { title: "Ticket Details", flight: ticketDoc });
  });
}
