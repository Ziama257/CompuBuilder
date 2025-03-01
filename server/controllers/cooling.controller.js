const Cooling = require('../models/cooling.model');

module.exports.getCoolingByName = async (req, res) => {
    try {
        const coolingName= req.params.name;
        console.log(coolingName)
        const cooling = await Cooling.find({ coolingName });
        console.log(cooling)
        res.json(cooling);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };



module.exports.createNewCooling = async (req, res) => {
    console.log("controller: Attempting to create cooling");
    try {
        const {name, brand, type, price, image } = req.body;

        const newCooling = await Cooling.create({ name, brand, type, price, image});

        res.json(newCooling);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Cooling', error });
    }
    };