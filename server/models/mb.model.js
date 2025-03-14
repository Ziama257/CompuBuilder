const mongoose = require('mongoose');

const MbSchema = new mongoose.Schema({

name: {
    type: String
},

brand: {
    type: String
},

wifi: {
    type: String
},

slots: {
    type: Number
},

socket: {
    type: String
},

price: {
    type: Number
},

image: {
    type: String
}

});

const Mb = mongoose.model('Mbs', MbSchema);

module.exports = Mb;