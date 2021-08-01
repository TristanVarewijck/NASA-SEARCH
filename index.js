const express = require('express');
const app = express();
const port = 3000;
const engine = require('ejs-mate');
const bodyParser = require('body-parser');
const colors = require('colors');
require('dotenv').config(); 


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('ejs', engine);
app.use(express.static('public'));
app.set('view engine', 'ejs');

// redirect
app.get('/', (req, res) => {
    res.redirect('/spacewatch');
  });

// HOME
app.get('/spacewatch', (req, res) => {
  res.render('index');
});

// GET RESPONSE
app.get('/spacewatch', (req, res) => {
  res.render('index');
});

// POST Button clicks
app.post('/spacewatch', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
    console.log(colors.yellow(`Example app listening at http://localhost:${port}`));
});