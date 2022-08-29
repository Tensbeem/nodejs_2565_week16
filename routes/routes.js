const { render } = require('ejs')
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    return render("index",{title:"Home Page"})
})

router.get('/users',(req,res)=>{
    return res.status(200).json({
        message: "All Users"
    })
})

module.exports = router