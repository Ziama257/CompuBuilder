const mongoose = require('mongoose');

const GpuSchema = new mongoose.Schema({

name: {
    type: String
},

brand: {
    type: String
},

vram: {
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

image: {
    type: String
}

});

const Gpu = mongoose.model('Gpus', GpuSchema);

module.exports = Gpu;