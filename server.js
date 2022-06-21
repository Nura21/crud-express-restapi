const express = require("express");
// var bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const db = require("./models");
// const router = require("./routes/routes");

db.sequelize.sync().then(() => {
  console.log("Synced db.");
}).catch((err) => {
  console.log("Failed" + err.message);
});

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


require("./routes/routes")(app);
// app.use("/api", router);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
