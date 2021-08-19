const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = 3000;
const app = express();

dotenv.config();

//database connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true});
mongoose.connection.on("connected", ()=>{
    console.log("Successfully connected to mongo database")
})
//routes
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

//middleware
app.use(express.json()); //used to extract data from body of requests
app.use(helmet());
app.use(morgan("common"));

app.use("/users", userRoute)
app.use("/auth", authRoute)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})