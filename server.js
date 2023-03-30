const express = require('express');
const routes = require('./Routes/routes');
const app = express();
const cors = require('cors');
require('dotenv').config('');

const mongodbconnect = require('../server/Connection/mongoose');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongodbconnect();
app.use(cors());
app.use(express.static('./build'));
app.use("/",routes);
const path = require('path');
app.get('*', (req, res) => {
res.sendFile(path.resolve(__dirname, './build', 'index.html'));
});
const PORT = process.env.PORT || 3000;
console.log('server started on port:',PORT);
app.listen(PORT);