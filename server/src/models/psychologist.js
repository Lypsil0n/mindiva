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
            allowNull: false,
        },
        psycName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        streetAddress: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        emailAddress: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        physicalMeetingsAvail: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        digitalMeetingsAvail: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
        {
        tableName: 'psychologist',
        underscored: true,
        timestamps: false
    }
);

export default Psychologist;