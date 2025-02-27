const mongoose = require('mongoose');

const PsuSchema = new mongoose.Schema({

name: {
    type: String
},

brand: {
    type: String
},


watts: {
    type: Number
},

price: {
    type: Number
}

});

const Psu = mongoose.model('Psus', PsuSchema);

module.exports = Psu;