const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const usersRoute = require('./routes/users.route');
const jobsRoute = require('./routes/jobs.route');
const authRoute = require('./routes/auth.route');

//requireMiddleware
const authMiddleware = require('./middleware/auth.middleware')

const app = express();

const port = 9080;

//setup dùng template pug
app.set('view engine', 'pug');
app.set('views', './views')

// use static file folder public
app.use(express.static('public'))

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('anonystick')); // parse cookie when use req.cookies


// render ra trang chủ
app.get('/', (req, res) => res.render("index",{name: 'Bạn'}));

app.use('/users',authMiddleware.requireAuth, usersRoute);
app.use('/jobs',authMiddleware.requireAuth, jobsRoute);
app.use('/auth', authRoute);


app.listen(port, ()=> console.log(`Đang được mở ở cổng ${port}`));