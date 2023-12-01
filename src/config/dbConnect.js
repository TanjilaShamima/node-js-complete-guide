const mongoose = require('mongoose');
const { appConfig } = require('./constant');


const connectDatabase = async() => {
    try {
        await mongoose.connect(appConfig.db.mongoDbUrl);
        console.log('Database connection established!');

        mongoose.connection.on('error', (err) => {
            console.log("Database connection error ", err);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDatabase;