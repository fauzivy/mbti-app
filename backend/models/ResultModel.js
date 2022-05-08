
import {Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Result = db.define(
    "results",
    {
        name: {
            type: DataTypes.STRING,
        },
        mbti: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
    }
);

export default Result;