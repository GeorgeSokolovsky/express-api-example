const mongoose = require('mongoose');
const {CursantSchema} = require('../schemas/cursant.schema');

exports.CursantModel = mongoose.model('Cursant', CursantSchema);