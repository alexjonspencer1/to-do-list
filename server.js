require('dotenv').config();

//Application dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const pg = require('pg');

//Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

//Start the server
app.listen(PORT, () => {
    console.log('server is running on PORT', PORT);
});