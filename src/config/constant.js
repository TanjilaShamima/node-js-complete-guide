const dotenv = require('dotenv');
dotenv.config();

const appConfig = {
    port: process.env.PORT || 8080,
    db: {
        mongoDbUrl : process.env.MONGODB_URL || ''
    }
}

module.exports = {
    appConfig
} 