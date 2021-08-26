const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/server');
const bodyParser = require('body-parser');

app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.set('view engine', 'ejs');

app.use('/', router);



mongoose.connect('mongodb://127.0.0.1/MyQuestion', 
{useNewUrlParser:true, useUnifiedTopology: true},
() => console.log("connected.."))

app.listen('3000');