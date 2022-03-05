const app = require("../app");
const request = require("supertest");
const mongoose = require("mongoose");
const { db } = require("../models/User");
dotenv.config()


beforeAll(async()=>{
    connection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    const db = mongoose.connection;
    const collection = process.env.COLLECTION
    await db.createCollection(collection)
})

afterAll(async()=>{
    const collection = "test_"+process.env.COLLECTION
    await db.dropCollection(collection)
    await db.dropDatabase()
    await db.close()
    await mongoose.connection.close()

})

describe("/register", ()=>{
    it("returns status code 201 if username and password were passed", async()=>{
        const response = await request(app).post("/register").send({
        username: "example",
        password: "examplepwd",
        avatar: "pic"
        })
        expect(response.statusCode).toEqual(201)
    })
})

