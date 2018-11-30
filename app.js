const express = require('express');
const bodyParser = require('body-parser');

const {cursantsRouter} = require('./routes/cursant.routes');

const app = express();

app.use(bodyParser.json());
app.use('/cursants', cursantsRouter.getRoutes());

app.listen(8080, () => console.log('we are on 8080'));