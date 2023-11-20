const express = require('express')
const router = express.Router()
router.use(express.urlencoded({extended:true}))
router.get('/', (req, res) =>  {
    res.render('form')
})

router.post('/', (req,res) =>{
    messages.push({text:message, user:UserName, added: new Date()});
    res.redirect('/index')
})

module.exports = router