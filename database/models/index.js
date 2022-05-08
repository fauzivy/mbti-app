const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquaire: dbConfig.pool.acquaire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.mbti = require("./mbti.model.js")(sequelize, Sequelize);
db.result = require("./result.model.js")(sequelize, Sequelize);

module.exports = db;