//  package requiring 
const express= require('express')
const app =express()
const mongoose =require('mongoose')
const jwt =require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const cors =require('cors')
const bcrypt = require('bcrypt')
require('dotenv').config()


app.get('/',(req,res)=>{
    res.json({message:'success',})
})

// MONGODB connection 
mongoose.connect("mongodb+srv://mernsoftwares:yyFU724pPeLFKLzp@cluster0.nzv4zpa.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connection successfully");
})
.catch(()=>{
    console.log("DB is not connected");
})





// middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cookieParser());
const router = require ('./Router/Auth')
app.use('/api',router)

// router 





// port server 
app.listen(process.env.PORT,()=>{
    console.log("SERVER PORT:",process.env.PORT);
})
