console.log('express.js');
// 1er:importer express
const express=require('express')
const path = require('path')
//2eme mettez express dans une variable 
const app = express()
const connectDT=require('./connectDB/connectDT')
connectDT();

app.use(express.json())
app.use('/users',require('./Router/routeuser'))
const port =7000;

app.listen(port,(err)=>{err?console.log(err):console.log('the port is runing en 7000')})


