const express = require('express');
const app = express();
const routes = require('./src/rotas');

app.use(express.json());

app.use(routes);
app.listen(8081, () => console.log('Ok'));