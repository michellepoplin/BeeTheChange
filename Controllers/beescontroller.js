const db = require("../models");

// Defining methods for the beesController
module.exports = {
  findAll: function(req, res) {
    db.Bees.find(req.query)
      .then(dbBees => res.json(dbBees))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Bees.findById(req.params.id)
      .then(dbBees => res.json(dbBees))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Bees.create(req.body)
      .then(dbBook => res.json(dbBees))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Bees.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbBees => res.json(dbBees))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Bees.findById(req.params.id)
      .then(dbBees => dbBees.remove())
      .then(dbBees => res.json(dbBees))
      .catch(err => res.status(422).json(err));
  }
};