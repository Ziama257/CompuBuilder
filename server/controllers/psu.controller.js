const Psu = require('../models/psu.model');

module.exports.getPsuByName = async (req, res) => {
    try {
        const psuName= req.params.name;
        console.log(psuName)
        const psu = await Psu.find({ psuName });
        console.log(psu)
        res.json(psu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };



module.exports.createNewPsu = async (req, res) => {
    console.log("controller: Attempting to create psu");
    try {
        const {name, brand, watts, price } = req.body;

        const newPsu = await Psu.create({ name, brand, watts, price});

        res.json(newPsu);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Psu', error });
    }
    };