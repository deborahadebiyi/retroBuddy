const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const port = 3000;
const app = express();

dotenv.config();

//routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/users", userRoute)
app.use("/auth", authRoute)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})