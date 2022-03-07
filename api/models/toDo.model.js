const { DataTypes } = require('sequelize');

// Utils
const { sequelize } = require('../util/database');

const ToDo = sequelize.define('toDo', {
	id: {
		primaryKey: true,
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
	},
	title: {
		type: DataTypes.STRING(100),
		allowNull: false, // NOT NULL
	},
	content: {
		type: DataTypes.STRING(255),
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING(10),
		allowNull: false,
		defaultValue: 'active',
	},
});

module.exports = { ToDo };