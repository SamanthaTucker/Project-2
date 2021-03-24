const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/users')

//User New route
router.get('/new', (req,res)=>{
    res.render('sessions/new.ejs', {currentUser: req.session.currentUser})
})

//User Create Route:

router.post('/', (req,res)=>{
    User.findOne({username: req.body.username}, (err, foundUser)=>{
        if(err){
            res.send(err)
        }
        else{
            if(foundUser){
                console.log(foundUser)
                
                if(bcrypt.compareSync(req.body.password, foundUser.password)){
                    req.session.currentUser = foundUser
                    res.redirect('/planner')
                }
                else{
                    res.send('<h1>Invalid Password</h1>')
                }
            }
            else{
                res.send('<h1>Invalid User<h1>')
            }
        }
    })
})

module.exports = router