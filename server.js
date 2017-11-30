// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var cors = require('cors');

const api = require('./api');

const app = express();
var connection = require('./connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors());
app.use('/api', api);

const port = process.env.PORT || '5000';
app.set('port', port);

connection.init();

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));