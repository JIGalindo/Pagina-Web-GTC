const {Sequelize}= require('sequelize')

const {config}= require('../Config/config')
const setupModels= require('../Models')

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect:'mysql'
    }
);

sequelize.sync();
setupModels(sequelize);
module.exports = sequelize;