import { sequelize } from "../config/db.js";
import { DataTypes } from '@sequelize/core';
import { uuidv7 } from "uuidv7";

const UserData = sequelize.define(
    'UserData',
    {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: uuidv7
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        identificationString: {
            type: DataTypes.STRING(6),
            unique: true,
            allowNull: false,
        },
        allowsPhysicalMeetings: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        allowsDigitalMeetings: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
        {
        tableName: 'user_data',
        underscored: true,
        timestamps: false
    }
);

export default UserData;