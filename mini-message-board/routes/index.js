var express = require('express');
var router = express.Router();
// router.use(express.urlencoded({extended:true}))

/* GET home page. */

const messages = [
  {
    text: "Hi there!",
    user: "John",
    added: new Date()
  },
  {
    text: "Hi back",
    user: "Tom",
    added: new Date()
  },

  {
    text: "NEW MESSAGE",
    user: "Brian",
    added: new Date()
  },
]

router.get('/', function(req, res, next) {
  res.render('index', {title: "MiniMessageboard",messages: messages})
});

router.get('/new', (req, res) =>  {
  res.render('form')
})

router.post('/new', (req,res) =>{
  messages.push({text:req.body.message, user:req.body.UserName, added: new Date()});
  res.redirect('/')
})

module.exports = router;
