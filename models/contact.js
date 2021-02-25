let mongoose = require('mongoose');

// create a model class contact
let contactModel = mongoose.Schema({
    username : String,
    contactName: String,
    contactNumber: Number,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);