
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home'
  });
});

app.get('/beers', (req, res, next) => {
  res.render('beers', {
    title: 'Beers'
  });
});

app.get('/random-beers', (req, res, next) => {
  res.render('random-beers', {
    title: 'Random Beer'
  });
});

app.listen(3000);
