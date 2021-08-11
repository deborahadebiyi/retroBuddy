const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const port = 3000;
const app = express();

dotenv.config();

//middleware
//body parser to parse requests
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


//routes
app.get("/", (req, res) => {
    res.send("Let's get retrospective!");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})