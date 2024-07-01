const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const apiRouter = require("./apiRouter.js");

const db = require("./db.js");
const sequelize = db.sequelize;

const app = express();
app.use(bodyParser.json());

app.use("/apiRouter", apiRouter);

sequelize.authenticate().then(() => {
    console.log("Sequelize etablished a connection");
}).catch(err => {console.log("Unable to connect to database")});

app.get("/api", (req, res) => {
res.json({ message: "Hello on the Express"});
})


app.listen(PORT, () => {
    console.log(`Up and running on PORT ${PORT}`);
})

module.exports = app;