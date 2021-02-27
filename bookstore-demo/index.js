const express = require('express');
const pug = require('pug');

const app = express()
const port = 3000

//using template engine pug
app.set('view engine', 'pug');
app.set('views', './views');

//static file
app.use(express.static('public'))

app.get('/', (req,res)=>{
  res.render('index')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})