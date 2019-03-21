const Farmer = require('../../models/FarmerSchema');

module.exports = app => {
    app.get('/api/farmers', (req, res, next) => {
        Farmer.find()
            .exec()
            .then(farmer => res.json(farmer))
            .catch(err => next(err));
    });
};
