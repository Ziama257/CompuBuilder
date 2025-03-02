const express = require("express"); 
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:"http://10.0.0.14:3000"
}));


require("./routes/compubuilder.routes")(app);
require("./config/mongoose.config");

app.listen(8000, ()=>console.log("Listening on Port 8000"))
