const mongoose = require('mongoose')
const {Schema, model} = mongoose

// New Vacation 
const vacationSchema = new Schema({
    image: {type: String},
    location: {type: String, required: true}, 
    dates: {type: String},
    budget: {type: Number, required: true},
    days: {type: Number, required: true}
})


const Vacation = model('Vacation', vacationSchema)

module.exports = Vacation