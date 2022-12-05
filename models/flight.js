const mongoose = require("mongoose");
// shortcut
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
  },
  arrival: {
    type: Date,
  },
});

// Create a destinationSchema that will provide the structure for destination subdocuments that will be embedded:
// Airport / String / ENUM / Default N/A
// Arrival / Date / N/A / N/A
const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Delta", "Southwest", "United"],
  },
  airport: {
    type: String,
    enum: ["ATL", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN",
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function () {
      // Default to a year from date created
      return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    },
  },
  destinations: [destinationSchema],
});

// airline = enum to include 'American', 'Delta', 'Southwest' & 'United'. Default = N/A
// airport = enum to include 'ATL', 'DFW', 'DEN', 'LAX' & 'SAN'. Default = 'DEN'
// flightNo = number, required between 10-9999. Default = N/A
// departs = date, N/A validation. Default = one year from date created

// Implement the following User Stories:

// AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.

// AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.

// AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:

// ALL FLIGHTS, and
// ADD FLIGHT

// By convention, model name is singular/uppercamel

module.exports = mongoose.model("Flight", flightSchema);
