const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Pattern = require('./models/pattern')

// Mongo connection
const dbpath = "mongodb://localhost:27017/mastermind";
const mongo = mongoose.connect(dbpath, {useNewUrlParser: true });
mongo.then(() => {
    console.log('Connection to Mastermind DB successful!');
}).catch((err) => {
    console.log('err db', err);
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080
const router = express.Router()

//  Middleware for all requests
router.use(function(req, res, next) {
  console.log('Something is happening.')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  console.log('Added Allow-Origin header for **')
  next()
})

// POST secret pattern (accessed at POST http://localhost:8080/api/patterns/)
router.route('/patterns/')
  .post(function(req, res) {
    if (!req.body.pattern || !req.body.date) {
      res.send('Wrong parameters, cant create!')
    }
    var pattern = new Pattern()      // create a new instance of the pattern model
console.log('req body pattern', req.body.pattern)
    pattern.pattern = req.body.category;
    pattern.date = req.body.date;

    // Save the pattern and check for errors
    pattern.save(function(err) {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'New secret pattern successfuly added!' })
    })
  })

//  REGISTER ROUTES (all routes will be prefixed with /api)
app.use('/api', router)

//  START THE SERVER
app.listen(port)
console.log('Mastermind API running on port ' + port+'! =D')