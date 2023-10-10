'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.get('/music', (req, res) => {
    res.send('Music is life');
});

app.listen(PORT, () => {
    console.log('Cloud server is running!');
});