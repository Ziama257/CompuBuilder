const Ram = require('../models/ram.model');

module.exports.getRamByName = async (req, res) => {
    try {
        const ramName= req.params.name;
        console.log(ramName)
        const ram = await Ram.find({ ramName });
        console.log(ram)
        res.json(ram);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };



module.exports.createNewRam = async (req, res) => {
    console.log("controller: Attempting to create ram");
    try {
        const {name, brand, size, clockSpeed, price } = req.body;

        const newRam = await Ram.create({ name, brand, size, clockSpeed, price});

        res.json(newRam);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Ram', error });
    }
    };