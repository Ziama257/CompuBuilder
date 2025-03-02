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
    type: String 
},


price: {
    type: Number
},

image: {
    type: String
}

});

const Ram = mongoose.model('Rams', RamSchema);

module.exports = Ram;