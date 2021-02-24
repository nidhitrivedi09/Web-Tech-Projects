let mongoose = require('mongoose');

// create a model class contact
let contactModel = mongoose.Schema({
    username : String,
    contactname: String,
    contactnumber: Number,
    email: String
    
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);