require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const morgan = require('morgan')

const PORT = process.env.PORT||4000

// database connection
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true})
const db = mongoose.connection;
db.on("error",(error)=>{
    console.log(error)
})

db.once("open",()=>{
    console.log("Connect to the databases")
})

app.use(morgan('dev'))
// http://localhost${PORT}
app.get('/',(req,res)=>{
    // return res.send("Home page")
    return res.json({
        message: "Home page"
    })
})
app.listen(PORT,(req,res)=>{
    console.log(`Server running at http://localhost${PORT}`)
})