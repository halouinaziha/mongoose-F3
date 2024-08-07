const Person = require("../model/personModel")
//Create and Save a Record of a Model:
let person = new Person({
name:"Sarra",
age: 32,
favoriteFoods: ["Kafteji", "Pizza", "Makloub"]

})
const createAndSavePerson = async () => {
    try {
await person.save()
    } catch (error){
        
        console.log(error)
    }
}
//Create Many Records with model.create()
let arrayOfPeople = [
{
name: "Rafik",
age: 32,
favoriteFoods: ["Kafteji", "Pizza", "Couscous"] 
},
{
    name: "Arij",
    age: 25,
    favoriteFoods: ["Mloukhia", "Makarouna"] 
    },
    

]

const createManyPeople = async () => {
    try {
await Person.create(arrayOfPeople)
    } catch (error){
        
        console.log(error)
    }
}

//Use model.find() to search Your Database
const search = async (searchByName) => {
    try {
const data = await Person.find({name: '${searchByName}'})
console.log(data)
    } catch (error){
        
        console.log(error)
    }
}


//Use model.findOne() to return a single matching document from your database
const searchByFood = async (food) => {
    try {
const data = await Person.findByFood({favoriteFoods: {$all:['${food}']}})
console.log(data)
    } catch (error){
        
        console.log(error)
    }
}
//Use model.findById() to search Your Database By _id

const searchById = async (id) => {
    try {
const data = await Person.findById('${id}')
console.log(data)
    } catch (error){
        
        console.log(error)
    }
}

//Perform Classic Updates by running Find, Edit, then Save
const updatePerson = async (personId) => {
    try {
const data = await Person.findById('${personId}')
data.favoriteFoods.push("hamburger")
data.save()
console.log(data)
    } catch (error){
        
        console.log(error)
    }
}
//Perform New Updates on a Document Using model.findOneAndUpdate()

const updatePersonAge = async (personName) => {
    try {
const data = await Person.findOneAndUpdate({name: '${personName}'}, {age:20}, {new: true})
data.save()
console.log(data)
    } catch (error){
        
        console.log(error)
    }
}
//Delete one Document Using model.findByIdAndRemove
const deletePerson = async (id) => {
    try {
const data = await Person.findByIdAndDelete('${id}')
data.save()
console.log(data)
    } catch (error){
        
        console.log(error)
    }
}
//MongoDB and Mongoose - Delete Many Documents with model.remove()

const deleteManyPeople = async (personName) => {
    try {
const data = await Person.deleteMany({name:'${personName}'})
data.save()
console.log(data)
    } catch (error){
        
        console.log(error)
    }
}

//Chain Search Query Helpers to Narrow Search Results
const chainSearch = async () => {
    try {
const data = await Person.find({favoriteFoods:{$all:["Pizza"]}})
.sort({name:"asc"})
.limit(2)
.select("-age")
.exec()
data.save()
console.log(data)
    } catch (error){
        
        console.log(error)
    }
}







module.exports = {
    createAndSavePerson,
    createManyPeople,
    search,
    searchByFood,
    searchById,
    updatePerson,
    updatePersonAge,
    deletePerson,
    deleteManyPeople,
    chainSearch,
}