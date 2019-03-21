const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    Name: {
        type: String,
        required: true
    },
    Image: String,
    About: String,
});

module.exports = mongoose.model('Farmer', FarmerSchema);
