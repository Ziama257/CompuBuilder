const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema({

name: {
    type: String
},

brand: {
    type: String
},

size: {
    type: Number
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

const Storage = mongoose.model('Storages', StorageSchema);

module.exports = Storage;