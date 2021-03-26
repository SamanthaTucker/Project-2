require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT

const bodyParser = require('body-parser')
const session = require('express-session')
const router = express.Router()

//Set Up Database
const mongoose = require('mongoose')

// method-override
const methodOverride = require('method-override')

app.use(methodOverride('_method'))

//app.use(express.json())


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


app.use((req, res, next)=>{
    next()
})

//CSS 
app.use(express.static('public'))

// Parse the Data / Creates the req.body:
app.use(express.urlencoded({extended: true}));


//Middleware for Sessions:
app.use(session({
    secret: process.env.SECRET ,
    resave: false ,
    saveUninitialized: false
}))



//Models:

const Vacation = require('./models/vacation')

// Controllers:

//for every request starting with '/planner' look on planner Controller
const plannerController = ('./controllers/planner')
//app.use('/planner', plannerController)


const sessionsController = require('./controllers/sessions')
app.use('/sessions', sessionsController)


//ROUTES:

//Homepage Route:
app.get('/', (req,res)=>{
    res.render('home.ejs', {
        currentUser: req.sessions.currentUser
    })
})


//Index route
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

// Delete Route:
app.delete('/:id', (req,res)=>{
    Vacation.findByIdAndRemove(req.params.id, (err, createdVacation)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(createdVacation)
            res.redirect('/planner')
        }
    })
})

//Edit Route
app.get('/:id/edit', (req,res)=>{
    console.log('Edit Route is working')
    Vacation.findById(req.params.id, (err, createdVacation)=>{
        res.render('edit.ejs', {
            newVacations: createdVacation
        })
    })
})

//POST Route 
//User created vacation planner here:
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

