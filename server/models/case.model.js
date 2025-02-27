const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({

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

const Case = mongoose.model('Cases', CaseSchema);

module.exports = Case;