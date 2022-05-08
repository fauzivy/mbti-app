module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("result", {
        name: {
            type: Sequelize.STRING,
        },
        mbti: {
            type: Sequelize.STRING,
        },
    });
    return Result;
}