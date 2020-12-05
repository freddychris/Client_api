'use strict';
module.exports={
    up: (queryInterface, Sequelize) =>{
        return queryInterface.createTable('addresses',{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.BIGINT 
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        address: {
            allowNull: false,
            type: Sequelize.STRING
        },
        city: {
            allowNull: false,
            type: Sequelize.STRING
        },
        state: {
            allowNull: false,
            type: Sequelize.STRING
        },
        pincode: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        country: {
            allowNull: false,
            type: Sequelize.STRING
        },
        mobile_no: {
            allowNull: false,
            type: Sequelize.STRING
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE
        }
    });
    },
down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('addresses');
 }
};