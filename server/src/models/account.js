import { sequelize } from "../config/db.js";
import { DataTypes } from '@sequelize/core';
import { uuidv7 } from "uuidv7";

const Account = sequelize.define(
    'Account',
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
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
        },
        passwordHash: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tokenHash: {
            type: DataTypes.TEXT
        },
    },
        {
        tableName: 'account',
        underscored: true,
        timestamps: false
    }
);

export default Account;