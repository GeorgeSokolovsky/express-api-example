const {cursants} = require('../mocks/cursants.mock');
const {Cursant} = require('../models/Cursant');
const {cursantRepository} = require('../repositories/cursant.repository');
 
class CursantController {
    findOne(id) {
        return cursants.find(
            ({id: cId}) => cId === id
        );
    }

    async findAll() {
        return await cursantRepository.getAll();
    }

    async create(cursant) {
        return await cursantRepository.createOne(cursant);
    }

    updateOne(id, data) {}

    async deleteOne(id) {
        return await cursantRepository.deleteOne(id);
    }
}

exports.cursantController = new CursantController();