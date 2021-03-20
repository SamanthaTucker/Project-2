const mongoose = require('mongoose')
const {Schema, model} = mongoose

//Locations
const scheduleSchema = new Schema({
   dayNum: {type: String},
   plans: {type: String},
   placesToSee: {type: String},
   importantTimes: {type: Number}
})


const Schedule = model('Schedule', scheduleSchema)

module.exports = Schedule