const mongoose = require('mongoose')
const {Schema, model} = mongoose

//Locations
const notesSchema = new Schema({
   travelNotes: {type: String}
})


const Notes = model('Notes', notesSchema)

module.exports = Notes