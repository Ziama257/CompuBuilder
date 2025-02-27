const mongoose = require('mongoose');

const CpuSchema = new mongoose.Schema({

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

const Cpu = mongoose.model('Cpus', CpuSchema);

module.exports = Cpu;