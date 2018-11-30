const {cursants} = require('../mocks/cursants.mock');
const {Cursant} = require('../models/Cursant');
 
class CursantController {
    findOne(id) {
        return cursants.find(
            ({id: cId}) => cId === id
        );
    }

    findAll() {
        return cursants;
    }

    create({id, name, iq}) {
        const cursant = new Cursant(+id, name, +iq);

        cursants.push(cursant);
    }

    updateOne(id, data) {}

    deleteOne(id) {
        const index = cursants.findIndex(c =>(c.id === id));
        cursants.splice(index, 1);

    }
}

exports.cursantController = new CursantController();