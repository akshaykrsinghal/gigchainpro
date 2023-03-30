const express = require('express');
const routes = require('./Routes/routes');
const app = express();
const cors = require('cors');
require('dotenv').config('');

const mongodbconnect = require('./Connection/mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongodbconnect();
app.use(cors());
app.use("/",routes);
const path = require('path');
const PORT = process.env.PORT || 3000;
console.log('server started on port:',PORT);
app.listen(PORT);