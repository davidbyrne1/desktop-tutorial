var express = require("express");
var router = express.Router();
var ticket = require("../controllers/ticketController.js");
//const uploadController = require("../controllers/upload");
// Get all tickets

// Create Networks ticket
router.get("/networks", function (req, res) {
  ticket.networks(req, res);
});

// Create ticket
router.get("/create", function (req, res) {
  ticket.create(req, res);
});

// Create ticket
router.get("/create", function (req, res) {
  ticket.sap1(req, res);
});

// Save ticket
router.post("/save", function (req, res) {
  ticket.save(req, res);
});

module.exports = router;
