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

app.get('/', (req, res) => {
    res.render('index');
  });

app.listen(port, () => {
    console.log(colors.yellow(`Example app listening at http://localhost:${port}`));
});