const express = require('express')
const router = express.Router()
const User = require('../models/users')
const bcrypt = require('bcrypt')


//User New Route:
router.get('/new', (req, res)=>{
    res.render('users/new.ejs', {currentUser: req.session.currentUser})
})



//User Create Route:
router.post('/', (req,res)=>{

    //hashing and salting:
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

    User.create(req.body, (err, createdUser)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(createdUser)
        }
    })
})


module.exports = router