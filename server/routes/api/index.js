const express = require('express');
const router = express.Router();

const Farmer = require('../../models/FarmerSchema');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router.get('/farmers', (req, res, next) => {
    //  TODO: filter data by name query param
    res.json([
        { id: 1, name: `Farmer 1 ${req.query.name}` },
        { id: 2, name: `Farmer 2 ${req.query.name}` },
        { id: 3, name: `Farmer 3 ${req.query.name}` },
    ]);
    // Farmer.find()
    //     .exec()
    //     .then(farmer => res.json(farmer))
    //     .catch(err => next(err));
});

module.exports = router;
