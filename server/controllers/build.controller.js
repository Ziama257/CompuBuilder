const CPU = require("../models/cpu.model");
const GPU = require("../models/gpu.model");
const Motherboard = require("../models/mb.model");
const RAM = require("../models/ram.model");
const Storage = require("../models/storage.model");
const PSU = require("../models/psu.model");
const Cooling = require("../models/cooling.model");
const PCCase = require("../models/pcCase.model");

const buildPC = async (req, res) => {
    try {
        const { budget, usage } = req.body;

        const budgetAllocation = {
            gaming: {
                cpu: 0.25,    
                gpu: 0.35,    
                mb: 0.05,
                ram: 0.05,
                storage: 0.05,
                psu: 0.15,    
                cooling: 0.05, 
                case: 0.10     
            },
            editing: {
                cpu: 0.25,    
                gpu: 0.30,    
                mb: 0.10,
                ram: 0.05,
                storage: 0.15, 
                psu: 0.10,    
                case: 0.05     
            },
            workstation: {
                cpu: 0.45,    
                gpu: 0.20,    
                mb: 0.10,
                ram: 0.10,
                storage: 0.05, 
                psu: 0.05,    
                case: 0.05     
            }
        };

        if (!budgetAllocation[usage]) return res.status(400).json({ error: "Invalid usage type" });

        let allocatedBudget = {};
        Object.keys(budgetAllocation[usage]).forEach(component => {
            allocatedBudget[component] = budget * budgetAllocation[usage][component];
        });

        // Helper function to find the best component within budget
        const findBestPart = async (Model, sortCriteria, budgetLimit, extraFilter = {}) => {
            let part = await Model.findOne({ price: { $lte: budgetLimit }, ...extraFilter }).sort(sortCriteria);
            if (!part) {
                // If no part is found in budget, get the closest match
                part = await Model.findOne({ ...extraFilter }).sort({ price: 1 });
            }
            return part;
        };

        // Select parts based on budget and priority
        const cpu = await findBestPart(CPU, { clockSpeed: -1, coreCount: usage === "workstation" ? -1 : -1 }, allocatedBudget.cpu);
        const mb = await findBestPart(Motherboard, { price: 1 }, allocatedBudget.mb, { socket: cpu.socket });

        const gpu = await findBestPart(
            GPU,
            { vram: usage === "editing" ? -1 : -1, clockSpeed: -1 },
            allocatedBudget.gpu
        );

        let ram = await findBestPart(
            RAM,
            { size: -1, clockSpeed: usage === "gaming" ? -1 : -1 },
            allocatedBudget.ram
        );

        const storage = await findBestPart(Storage, { size: -1 }, allocatedBudget.storage, { type: "SSD" });

        const psu = await findBestPart(PSU, { watts: -1 }, allocatedBudget.psu, {
            watts: { $gte: cpu.powerDraw + gpu.powerDraw + 100 }
        });

        const cooling = await findBestPart(Cooling, { price: -1 }, allocatedBudget.cooling);

        const pcCase = await findBestPart(PCCase, { price: -1 }, allocatedBudget.case); 

        // Ensure DDR5 RAM is compatible
        if (ram.clockSpeed.includes("DDR5") && !["AM5", "LGA1700"].includes(mb.socket)) {
            ram = await findBestPart(RAM, { size: -1, clockSpeed: -1 }, allocatedBudget.ram, { clockSpeed: { $not: /DDR5/ } });
        }

        res.json({ cpu, gpu, mb, ram, storage, psu, cooling, pcCase }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error", details: err.message });
    }
};

module.exports = { buildPC };