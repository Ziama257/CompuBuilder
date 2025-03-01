const Gpu = require('../models/gpu.model');

module.exports.getGpuByName = async (req, res) => {
    try {
        const gpuName= req.params.name;
        console.log(gpuName)
        const gpu = await Gpu.find({ gpuName });
        console.log(gpu)
        res.json(gpu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };



module.exports.createNewGpu = async (req, res) => {
    console.log("controller: Attempting to create gpu");
    try {
        const {name, brand, vram, clockSpeed, powerDraw, price, image } = req.body;

        const newGpu = await Gpu.create({ name, brand, vram, clockSpeed, powerDraw, price, image});

        res.json(newGpu);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Gpu', error });
    }
    };