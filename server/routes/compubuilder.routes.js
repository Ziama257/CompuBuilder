const cpuController = require("../controllers/cpu.controller");
module.exports = (app) => {
//cpu routes
app.post("/api/cpus", cpuController.createNewCpu);
app.get("/api/cpus/:id", cpuController.getCpu);
}