// const router = require("../../routes/notes");
const addNote= require("../routes/notes");
const request = require("supertest");
const app = require("../app")
jest.useFakeTimers('legacy')

// describe("addNote functionality", ()=>{
//     test("returns false if note is empty", ()=>{
//         expect(addNote("")).toBe(false)
//     })

//     test("returns true if note is not empty ",()=>{
//         expect(addNote("TDD is cool")).toBe(true)
//     })
// })

// describe("POST /notes", ()=>{
//     describe("POST /notes/add", ()=>{
//         test("should create new note", async()=>{
//             const newNote = await request(app)
//             .post("/notes/add")
//             .send({
//                 message: "this is a new note",
//                 owner: "retrouser124",
//                 date: new Date(),
//                 likes: 0
//             }, 10000)
//             expect(201)
//         })
//     })
// })
// describe("POST /notes", ()=>{

//    describe("given a message is not empty", ()=>{
//         beforeEach(() => {
//             jest.setTimeout(10000);
//         });
//        test("should specify json in the content type header", async()=>{
//            const response = await request(noteRouter).post("/notes").send({
//                message: "this is a new note"
//            })
//            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//        })  
//    }) 
// })

//should save the message to the database
//should repsind with a json object containing the user id
//should respond with a 200 status code
//should specify json in the content type 
//field validation