const express = require('express');
const bodyParser = require('body-parser');

const usersRoute = require('./routes/users.route');
const jobsRoute = require('./routes/jobs.route');

const app = express();

const port = 9080;


//setup dùng template pug
app.set('view engine', 'pug');
app.set('views', './views')

// use static file folder public
app.use(express.static('public'))

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// render ra trang chủ
app.get('/', (req, res) => res.render("index",{name: 'Bạn'}));

app.use('/users', usersRoute);

app.use('/jobs', jobsRoute);


app.listen(port, ()=> console.log(`Đang được mở ở cổng ${port}`));