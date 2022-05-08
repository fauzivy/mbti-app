module.exports = (sequelize, Sequelize) => {
    const Mbti = sequelize.define("mbti", {
        name: {
            type: Sequelize.STRING,
        },
        desc: {
            type: Sequelize.STRING,
        },
    });
    return Mbti;
}