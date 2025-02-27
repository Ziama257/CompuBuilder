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

pcieSlots: {
    type: Number
},

socket: {
    type: String
},

price: {
    type: Number
}

});

const Mb = mongoose.model('Mbs', MbSchema);

module.exports = Mb;