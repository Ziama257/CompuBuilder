const mongoose = require('mongoose');

const CpuSchema = new mongoose.Schema({

name: {
    type: String
},

brand: {
    type: String
},

coreCount: {
    type: Number
},

clockSpeed: {
    type: Number 
},

powerDraw: {
    type: Number
},

price: {
    type: Number
},

socket:{
    type: String
},

image: {
    type: String
}

});

const Cpu = mongoose.model('Cpus', CpuSchema);

module.exports = Cpu;