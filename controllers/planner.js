const express = require('express')
const Vacation = require('../models/vacation')
const router = express.Router()


//Index route for vacation , list the vacations made:
router.get('/', (req,res)=>{
    req.session.username = 'Sammy'

    Vacation.find({}, (err, foundVacations, next)=>{
        if(err){
            console.log(err)
            next()
        }
        else{
            res.render('index.ejs', {
                vacations: foundVacations,
                currentUser: req.session.currentUser
            })
        }
    })
})

//New Route --- New.ejs
router.get('/new', (req,res)=>{
    console.log(req.session)
    res.render('new.ejs', {currentUser: req.session.currentUser})
})

// Show route ---- Get /planner/:id
router.get('/:id', (req,res)=>{
    Vacation.findById(req.params.id, (err, foundVacations)=>{
        res.render('show.ejs', {
            vacations: foundVacations,
            currentUser: req.session.currentUser
        })
    })
})

//Post Route --- Create
router.post('/', (req,res)=>{
    Vacation.create(req.body, (err, createdVacation)=>{
        if(err){
            res.send(err)
        }
        else{
            console.log(createdVacation)
            res.redirect('/planner')
        }
    })
})

//Delete Route
router.delete('/:id', (req,res)=>{
    Vacation.findByIdAndRemove(req.params.id, (err, createdVacation)=>{
        if(err){
            console.log(err)
        }
        else{
            res.redirect('/planner')
        }
    })
})

//Edit Route
router.get('/:id/edit', (req,res)=>{
    Vacation.findById(req.params.id, (err, foundVacations)=>{
        res.render('edit.ejs', {
            vacations: foundVacations
        })
    })
})


//Update Route
// PUT /planner/:id updates info on the server
router.put('/:id', (req,res)=>{
    Vacation.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedVacation)=>{
        res.redirect('/planner')
    })
})


module.exports = router