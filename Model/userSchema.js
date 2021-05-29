const mongoose = require('mongoose')
const Schema=mongoose.Schema

const userSchema = new Schema({
firstName:{type:String, required:true},
lastName:{type:String},
age:{type:Number},
});

module.exports=mongoose.model("user",userSchema)