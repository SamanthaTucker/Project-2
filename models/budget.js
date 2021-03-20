const mongoose = require('mongoose')
const {Schema, model} = mongoose

//Locations
const budgetSchema = new Schema({
    hotel: {type: Number},
    transportation: {type: Number},
    spending: {type: Number},
    food: {type: Number}
})


const Budget = model('Budget', budgetSchema)

module.exports = Budget