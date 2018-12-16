const express = require('express');
const http = require('http');
const bodyParder= require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');


// Setup DB
mongoose.connect('mongodb://localhost/auth',  { useNewUrlParser: true , useCreateIndex: true} );

const app = express();


// App Setup
app.use(morgan('combined'));
app.use(bodyParder.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);

console.log('Server listing on :', port);