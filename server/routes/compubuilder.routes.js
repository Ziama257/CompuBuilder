const cpuController = require("../controllers/cpu.controller");
const pcCaseController = require("../controllers/PcCase.controller");
const coolingController = require("../controllers/cooling.controller");
const gpuController = require("../controllers/gpu.controller");
const mbController = require("../controllers/mb.controller");
const psuController = require("../controllers/psu.controller");
const ramController = require("../controllers/ram.controller");
const storageController = require("../controllers/storage.controller");
module.exports = (app) => {
//cpu routes
app.post("/api/cpus", cpuController.createNewCpu);
app.get("/api/cpus/:id", cpuController.getCpuByName);
app.post("/api/cases", pcCaseControllercaseController.createNewPcCase);
app.get("/api/cases/:id", pcCaseController.getPcCaseByName);
app.post("/api/cooling", coolingController.createNewCooling);
app.get("/api/cooling/:id", coolingController.getCoolingByName);
app.post("/api/gpus", gpuController.createNewGpu);
app.get("/api/gpus/:id", gpuController.getGpuByName);
app.post("/api/cpus", cpuController.createNewCpu);
app.get("/api/cpus/:id", cpuController.getCpuByName);
app.post("/api/cpus", cpuController.createNewCpu);
app.get("/api/cpus/:id", cpuController.getCpuByName);

}