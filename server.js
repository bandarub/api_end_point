const express = require('express');
const bodyParser = require('body-parser');

const analyze = require('./api/analyze');

const app=express();
const port=process.env.PORT||5000;

//Body parser middleware
app.use(bodyParser.json());

//use Routes
app.use('/api/analyze',analyze);

app.listen(port,()=>console.log(`Server running on Port ${port}`));

