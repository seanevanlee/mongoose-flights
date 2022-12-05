const mongoose = require("mongoose");
// shortcut
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  sseat: {
    type: String,
    match: /[A-F][1-9]\d?/,
  },
  price: {
    type: Number,
    min: 0,
  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: "Flight",
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);