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
}

});

const Storage = mongoose.model('Storages', StorageSchema);

module.exports = Storage;