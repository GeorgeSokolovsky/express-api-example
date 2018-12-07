const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://<user>:<password>@ds129733.mlab.com:29733/andersen-courses-example'

function initDBConnection() {
    mongoose.connect(MONGO_URL);
    mongoose.Promise = global.Promise;

    const {connection} = mongoose;

    connection.on('error', err => {
        console.error('DB error: ', err);
    });

    return connection;
}

exports.initDBConnection = initDBConnection;