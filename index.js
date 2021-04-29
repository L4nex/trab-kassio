const express = require('express');

const morgan = require('morgan');

const routes = require('./src/routes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use(
    express.urlencoded({
    extended: false,
    }),
);

app.use(routes);
app.listen(8081, () => console.log('Ok'));