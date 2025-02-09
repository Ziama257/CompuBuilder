const mongoose = require("mongoose");
const dbName = "compubuilderDB";
mongoose.connect(`mongodb://localhost:27017/${dbName}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(()=>console.log(`Connected to ${dbName} database!`))
.catch((err)=>console.log(err));