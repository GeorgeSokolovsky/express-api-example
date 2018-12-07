const express = require('express');
const bodyParser = require('body-parser');

const {cursantsRouter} = require('./routes/cursant.routes');
const {initDBConnection} = require('./db/db');

const app = express();

initDBConnection();

app.use(bodyParser.json());
app.use('/cursants', cursantsRouter.getRoutes());

app.listen(8080, () => console.log('we are on 8080'));