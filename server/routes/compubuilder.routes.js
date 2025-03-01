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
//case routes
app.post("/api/cases", pcCaseController.createNewPcCase);
app.get("/api/cases/:id", pcCaseController.getPcCaseByName);
//cooling routes
app.post("/api/coolings", coolingController.createNewCooling);
app.get("/api/coolings/:id", coolingController.getCoolingByName);
//gpu routes
app.post("/api/gpus", gpuController.createNewGpu);
app.get("/api/gpus/:id", gpuController.getGpuByName);
//mb routes
app.post("/api/mbs", mbController.createNewMb);
app.get("/api/mbs/:id", mbController.getMbByName);
//psu routes
app.post("/api/psus", psuController.createNewPsu);
app.get("/api/psus/:id", psuController.getPsuByName);
//ram routes
app.post("/api/rams", ramController.createNewRam);
app.get("/api/rams/:id", ramController.getRamByName);
//storage routes
app.post("/api/storages", storageController.createNewStorage);
app.get("/api/storages/:id", storageController.getStorageByName);

}