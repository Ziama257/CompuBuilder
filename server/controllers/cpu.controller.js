const Cpu = require('../models/cpu.model');

module.exports.createNewCpu = async (req, res) => {
    console.log("controller: Attempting to create cpu");
    try {
        const {name, brand, coreCount, clockSpeed, powerDraw, price } = req.body;

        const newCpu = await Cpu.create({ name, brand, coreCount, clockSpeed, powerDraw, price});

        res.json(newCpu);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Cpu', error });
    }
    };
