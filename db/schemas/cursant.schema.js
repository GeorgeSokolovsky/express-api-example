const {Schema} = require('mongoose');

exports.CursantSchema = new Schema({
    name: String,
    iq: Number
});