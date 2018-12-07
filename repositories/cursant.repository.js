const {CursantModel} = require('../db/models/cursant.model');

class CursantRepository {
    async getAll() {
        return await CursantModel
            .find();
    }
    
    async createOne(cursant) {
        return await CursantModel.create(cursant);
    }

    async deleteOne(_id) {
        return await CursantModel.deleteOne({_id});
    }
}

exports.cursantRepository = new CursantRepository();