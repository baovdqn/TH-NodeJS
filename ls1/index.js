require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

// connect to mongodb
mongoose.connect('mongodb://localhost/express-demo');

const db = mongoose.connection;
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
app.use('/cart', cartRoute)


app.listen(port, () => console.log(`Đang được mở ở cổng ${port}`));