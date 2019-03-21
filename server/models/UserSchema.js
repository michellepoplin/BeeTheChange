const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Id: {
        Name: "",
        Image: "",
        AboutMe: ""
    }
});

module.exports = mongoose.model('User', UserSchema);
