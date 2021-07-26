const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const port = 3001;
const app = express();

dotenv.config();


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})