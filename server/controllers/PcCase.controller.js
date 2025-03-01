const PcCase = require('../models/pcCase.model');

module.exports.getPcCaseByName = async (req, res) => {
    try {
        const pcCaseName= req.params.name;
        console.log(pcCaseName)
        const pcCase = await PcCase.find({ pcCaseName });
        console.log(pcCase)
        res.json(pcCase);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };



module.exports.createNewPcCase = async (req, res) => {
    console.log("controller: Attempting to create pcPcCase");
    try {
        const {name, brand, size, price, image } = req.body;

        const newPcCase = await PcCase.create({ name, brand, size, price, image});

        res.json(newPcCase);
    } catch (error) {
        res.status(400).json({ message: 'Error creating PcCase', error });
    }
    };