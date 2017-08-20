'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors')

const app = express();

const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

const blog = require('./routers/blog');
const user = require('./routers/user');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/blog', blog);
app.use('/user', user);

app.listen(3000);
