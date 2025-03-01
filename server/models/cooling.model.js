const mongoose = require('mongoose');

const CoolingSchema = new mongoose.Schema({

name: {
    type: String
},

brand: {
    type: String
},

type: {
    type: String
},

price: {
    type: Number
},

image: {
    type: String
}

});

const Cooling = mongoose.model('Coolings', CoolingSchema);

module.exports = Cooling;