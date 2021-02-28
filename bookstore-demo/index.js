const express = require('express');
const pug = require('pug');

const app = express()
const port = 3000

const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const upload = multer() // for parsing multipart/form-data

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//using template engine pug
app.set('view engine', 'pug');
app.set('views', './views');


//require mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookstore-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

//static file
app.use(express.static('public'))

//import router
const productRoute = require('./routes/products.route')
const userRoute = require('./routes/user.route')

// app.get('/', (req,res)=>{
//   res.render('index')
// })

app.use('/', productRoute)
app.use('/user', userRoute)


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})