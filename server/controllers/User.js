const mongoose = require('mongoose');
const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.User.find().then(dbUsers => {
            res.json(dbUsers);
        });
    },
    find: (req, res) => {
        db.User.findById(req.params.id).then(dbUser => {
            if (dbUser) {
                res.json(dbUser);
            } else {
                res.sendStatus(404);
            }
        });
    },
    create: (req, res) => {
        db.User.create({ ...req.body, _id: mongoose.Types.ObjectId() }).then(dbUser => {
            res.json(dbUser);
        }).catch(error => {
            res.status(400).json({
                message: error.message,
            });
        });
    },
    update: (req, res) => {
        db.User.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(dbUser => {
            if (dbUser) {
                res.json(dbUser);
            } else {
                res.sendStatus(404);
            }
        });
    },
    delete: (req, res) => {
        db.User.remove({ _id: req.params.id }).then(dbUser => {
            res.json(dbUser);
        });
    },
};
