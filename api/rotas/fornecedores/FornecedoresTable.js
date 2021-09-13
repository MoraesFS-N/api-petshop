const Sequelize = require('sequelize');
const instance = require('../../banco-de-dados');

const columns = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
    
}

const options = { 
    freezeTableName: true,
    tableName: Fornecedores,
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao',
    version: 'versao'
}

module.exports = instance.define('fornecedor', columns, options);