const express = require("express")
const connectDB = require("./config/connectDB")
require("dotenv").config({path: "./config/.env"})
const queries = require("./queries/queries")

connectDB()

// queries.createAndSavePerson()
// queries.createManyPeople()
// queries.search("Rafik")
//queries.searchByFood("Pizza")
//queries.updatesPersonAge("Arij")
//queries.deleteManyPeople ("Rafik")
//queries.chainSearch()



const app = express()
const PORT = process.env.PORT
app.listen(PORT, (err) => {
    err ? console.log(err)
        : console.log (`server running on port ${PORT}`)
})

