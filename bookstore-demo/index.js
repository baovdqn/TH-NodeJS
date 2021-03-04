const express = require('express');
const pug = require('pug');
var cookieParser = require('cookie-parser');

const app = express()
const port = 3000

const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const session = require('express-session');

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
app.use(express.static('public'));

//cookies
app.use(cookieParser());

app.use(session({     // config express-session
  secret: 'bao',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

//require middlewares
const authMiddleware = require('./middlewares/auth.middleware')

//import router
const productRoute = require('./routes/products.route')
const userRoute = require('./routes/user.route')
const managerRoute = require('./routes/manager.route')


app.use('/',
  authMiddleware.userName, 
  productRoute
);
app.use('/user', userRoute)
app.use('/manager', managerRoute)


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})