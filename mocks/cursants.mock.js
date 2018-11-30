const {Cursant} = require('../models/Cursant');

exports.cursants = [
    new Cursant(1, 'Егор Залевский', 80),
    new Cursant(2, 'Георгий Соколовский', Number.MAX_SAFE_INTEGER),
    new Cursant(3, 'Константин Курчавый', 15)
];