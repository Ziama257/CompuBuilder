const mongoose = require('mongoose');

const PcCaseSchema = new mongoose.Schema({

name: {
    type: String
},

brand: {
    type: String
},

size: {
    type: String
},

price: {
    type: Number
}

});

const PcCase = mongoose.model('PcCases', PcCaseSchema);

module.exports = PcCase;