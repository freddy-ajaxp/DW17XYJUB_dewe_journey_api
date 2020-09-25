require("dotenv").config();

//Init Express
const express = require("express");
// const MultipartyMiddleware = multiparty({uploadDir:'./images'})
const router = require("./routes/router");
const bodyParser = require("body-parser");
const cors = require("cors");


//gunakan express
//cors
//Define Port
const app = express();
const port = 5002;
app.use(cors())
app.use('/uploads', express.static("uploads"))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
 
app.use("/api/", router);

app.listen(port, () => console.log(`Listening on port ${port}`));
