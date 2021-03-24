require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT
const bodyParser = require('body-parser')
const session = require('express-session')


//Set Up Database
const mongoose = require('mongoose')

// method-override
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

app.use(express.json())


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
app.use(express.urlencoded({extended: true}));

//Models:

const Vacation = require('./models/vacation')
//my destinations/ Locations to be entered

// const budgetSchema = require('./models/budget')
// // Budget for vacations to be entered

// const scheduleSchema = require('./models/schedule')
// //Day schedule to be entered

// const notesSchema = require('./models/notes')
// //Travel notes to be entered

//ROUTES:

// Index route
app.get('/planner', (req, res)=>{
    console.log('Index Route is working')
    Vacation.find({}, (err, createdVacation)=>{
        if(err){
            console.log(err)
        }
        else{
            res.render('index.ejs', {newVacations: createdVacation})
        }
    })
})

// New route
app.get('/planner/new', (req,res)=>{
    console.log('New Route is working')
    res.render('new.ejs')
})

//Edit Route
app.get('/planner/edit', (req,res)=>{
    console.log('Edit Route is working')
})

//POST Route
app.post('/planner', (req, res)=>{
    console.log('Post is working planner/new ')
    //console.log(req.body) // So it is taking input
    Vacation.create(req.body, (err, createdVacation)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log(createdVacation)
            res.redirect('/planner')
        }
    })
})


app.listen(PORT, ()=>{
    console.log("Server is Listening!! :)")
})


// https://expressjs.com/en/guide/using-middleware.html

