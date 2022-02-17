const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/connect');
//const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app .get('/contact', (req, res) => {
//    res.cookie("test", 'sayef');
    res.send(`Welcome to contact page`);
});

app .get('/signin', (req, res) => {
    res.send(`Welcome to signin page`);
});

app .get('/signup', (req, res) => {
    res.send(`Welcome to signup page`);
});



app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}...`);
});