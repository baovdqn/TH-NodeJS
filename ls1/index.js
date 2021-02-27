require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/express-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

//check connect database
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Database connected')
});


const usersRoute = require('./routes/users.route');
const jobsRoute = require('./routes/jobs.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route')
const cartRoute = require('./routes/cart.route')
const apiUserRoute = require('./api/routes/users.route')
const apiProductRoute = require('./api/routes/products.route')

//requireMiddleware
const authMiddleware = require('./middleware/auth.middleware')
const sessionMiddleware = require('./middleware/session.middleware')

const app = express();

const port = 9080;

//setup dùng template pug
app.set('view engine', 'pug');
app.set('views', './views')

// use static file folder public
app.use(express.static('public'))

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET)); // parse cookie when use req.cookies
app.use(sessionMiddleware);

// render ra trang chủ
app.get('/', (req, res) => {
    res.render("index", { name: 'Bạn' })
});



app.use('/users', authMiddleware.requireAuth, usersRoute);
app.use('/jobs', authMiddleware.requireAuth, jobsRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);
app.use('/cart', cartRoute);
app.use('/api/users', apiUserRoute);
app.use('/api/products', apiProductRoute);


app.listen(port, () => console.log(`App listening at http://localhost:${port}`));