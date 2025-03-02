const Cpu = require('../models/cpu.model');

module.exports.getCpuByName = async (req, res) => {
    try {
        const cpuName= req.params.name;
        console.log(cpuName)
        const cpu = await Cpu.find({ cpuName });
        console.log(cpu)
        res.json(cpu);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };



module.exports.createNewCpu = async (req, res) => {
    console.log("controller: Attempting to create cpu");
    try {
        const {name, brand, coreCount, clockSpeed, powerDraw, price, socket, image } = req.body;

        const newCpu = await Cpu.create({ name, brand, coreCount, clockSpeed, powerDraw, price, socket, image});

        res.json(newCpu);
    } catch (error) {
        res.status(400).json({ message: 'Error creating Cpu', error });
    }
    };

