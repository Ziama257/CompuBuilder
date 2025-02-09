const cpuController = require("../controllers/cpu.controller");
app.post("/api/cpus", cpuController.createNewCpu);