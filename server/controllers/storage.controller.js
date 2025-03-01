const Storage = require('../models/storage.model');

module.exports.getStorageByName = async (req, res) => {
    try {
        const storageName= req.params.name;
        console.log(storageName)
        const storage = await Storage.find({ storageName });
        console.log(storage)
        res.json(storage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };



module.exports.createNewStorage = async (req, res) => {
    console.log("controller: Attempting to create storage");
    try {
        const {name, brand, size, type, price, image } = req.body;

        const newStorage = await Storage.create({ name, brand, size, type, price, image});

        res.json(newStorage);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Storage', error });
    }
    };