import { sequelize } from "../config/db.js";
import { DataTypes } from '@sequelize/core';
import { uuidv7 } from "uuidv7";

const Psychologist = sequelize.define(
    'Psychologist',
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: uuidv7
        },
        verbalId: {
            type: DataTypes.STRING(50),
        },
        psycName: {
            type: DataTypes.STRING(50),
        },
        streetAddress: {
            type: DataTypes.STRING(50),
        },
        postalCode: {
            type: DataTypes.STRING(50),
        },
        city: {
            type: DataTypes.STRING(50),
        },
        phoneNumber: {
            type: DataTypes.STRING(50),
        },
        emailAddress: {
            type: DataTypes.STRING(50),
        },
    },
        {
        tableName: 'psychologist',
        underscored: true,
        timestamps: false
    }
);

export default Psychologist;