import { Sequelize } from "sequelize";

const db = new Sequelize("db_mbti", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;