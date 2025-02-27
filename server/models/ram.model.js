const mongoose = require('mongoose');

const RamSchema = new mongoose.Schema({

name: {
    type: String
},

brand: {
    type: String
},

size: {
    type: Number
},

clockSpeed: {
    type: Number 
},


price: {
    type: Number
}

});

const Ram = mongoose.model('Rams', RamSchema);

module.exports = Ram;