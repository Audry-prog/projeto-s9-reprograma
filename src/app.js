const express = require('express');
const livros = require('body-parser');
const app = express();

const index = require('./routes/index');
const livros = require('./routes/livrosRoute');
const funcionarios = require('./routes/funcionariosRoute');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Request-With, Content-Type, Accept'
    )
    next()
})

app.use(bodyParser.json());
app.use('/index');
app.use('/livros');
app.use('/funcionarios', funcionarios);

module.exports = app