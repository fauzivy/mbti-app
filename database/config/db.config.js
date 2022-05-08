module.exports = {
    host: "localhost",
    user: "root",
    password: "",
    db: "db_mbti",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquaire: 30000,
        idle: 10000,
    },
};