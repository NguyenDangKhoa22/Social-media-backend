const { DataTypes } = require('sequelize');
const sequelize = require('../config/connect/database');
const { underscoredIf } = require('sequelize/lib/utils');

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },{
        tableName: 'users',
        timestamps: true,
        underscored: true
    });
module.exports = User;