const mongoose = require('mongoose');

const FarmerSchema = new mongoose.Schema({
    Id: {
        Name: "",
        Image: "",
        AboutMe: ""
    }
});

module.exports = mongoose.model('Farmer', FarmerSchema);
