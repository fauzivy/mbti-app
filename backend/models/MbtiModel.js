
import {Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Mbti = db.define(
    "mbtis",
    {
        name: {
            type: DataTypes.STRING,
        },
        desc: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
    }
);

export default Mbti;