const express = require('express');
const router = express.Router();

const farmerRoutes = require('./Farmer');
const userRoutes = require('./User');

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

router.use('/farmers', farmerRoutes);
router.use('/users', userRoutes);

module.exports = router;
