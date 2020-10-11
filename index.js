const express = require("express");
const app = express();


const {PORT} = require("./config");
// Set view engine
app.set("view engine", "ejs");

// Get json data
app.use(express.json());

// Importing routes
const initializeRoutes = require("./routes");
initializeRoutes(app);


app.listen(PORT, async() => {
     console.log("connected to server");
})
