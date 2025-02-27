const Mb = require('../models/mb.model');

module.exports.getMbByName = async (req, res) => {
    try {
        const mbName= req.params.name;
        console.log(mbName)
        const mb = await Mb.find({ mbName });
        console.log(mb)
        res.json(mb);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };



module.exports.createNewMb = async (req, res) => {
    console.log("controller: Attempting to create mb");
    try {
        const {name, brand, wifi,pcieSlots, socket, price } = req.body;

        const newMb = await Mb.create({ name, brand, wifi,pcieSlots, socket, price});

        res.json(newMb);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Mb', error });
    }
    };