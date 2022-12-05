// import it over for CRUD
const Flight = require("../models/flight");

module.exports = {
  create,
};

function create(req, res) {
  console.log("============");
  console.log(req.body);
  console.log("============");
  Flight.findById(req.params.id, function (err, flightDoc) {
    if (err) {
      console.log(err);
      return res.send(
        "crash landing! error in destination creation, check terminal"
      );
    }
    console.log(flightDoc);
    flightDoc.destinations.push(req.body);
    flightDoc.save(function (err, flightDoc) {
      console.log(flightDoc);
      res.redirect(`/flights/${req.params.id}`);
    });
  });
}
