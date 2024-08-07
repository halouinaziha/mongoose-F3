const mongoose = require("mongoose")
const {Schema, model} = mongoose
const PersonSchema = new mongoose.Schema({

name :{type: String, requied : true},
age: Number,
favoriteFoods: [String]


})
const Person = model("Person",PersonSchema)
module.exports = Person