require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT

const session = require('express-session')


//Set Up Database
const mongoose = require('mongoose')

// method-override
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

//Database
const mongoURI = process.env.MONGODBURI

const db = mongoose.connection

mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=>{
    console.log("Database Connection Checked..")
})

db.on('error', (err)=> { console.log('ERROR: ', err)})
db.on('connected', ()=> { console.log("MONGO Connected")})
db.on('disconnected', ()=> { console.log("MONGO Disconnected")})

//CSS 
app.use(express.static('public'))

// Parse the Data / Creates the req.body:
app.use(express.urlencoded({extended: true}))





app.listen(PORT, ()=>{
    console.log("Server is Listening!! :)")
})


// https://expressjs.com/en/guide/using-middleware.html