const mongoose = require('mongoose')
const {Schema, model} = mongoose

//Locations
const locationsSchema = new Schema({
    destination: {type: String, required: true}, 
})


const Locations = model('Locations', locationsSchema)

module.exports = Locations 