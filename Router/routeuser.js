
const express=require('express')
const User =require('../Model/userSchema')
const route=express.Router()
// get all user
route.get('/',(req,res)=>{
    User.find({},(err,data)=>{
        err?console.log(err):res.json(data)
    })
})
//add a new user
route.post('/newUser',(req,res)=>{
    let newUser=new User(req.body)
    newUser.save((err,data)=>{err?console.log(err):res.send("user aded")})
})
//update user by Id
route.put( '/:id', (req,res)=> {
    User.findByIdAndUpdate( {_id:req.params.id},{...req.body},(err,data)=> {
        err ? console.log(err) : res.json({msg:"user was updated"})
    })
})

//delate user by Id
route.delete('/:id', (req,res)=> {
    User.findByIdAndDelete({_id:req.params.id},(err,msg)=> {      
        err ? console.log(err) : res.json({msg:"user was deleted"})
    })
})
module.exports=route


