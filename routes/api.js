var express = require('express');
var router = express.Router();

/* GET greetings. */
router.get('/greeting', function(req, res, next) {
  res.send('Good Morning Mate ! Have a wonderful day !');
});
let finalResponse = {} 
let list = []
let response = {}
response.version = "1.0"
response.description = "pre-interview technical test"
list.push(response)
finalResponse.greeting_service = list

/* GET metadata. */
router.get('/metadata', function(req, res, next) {
   
  res.send(finalResponse);
});

module.exports = router;