'use strict'
module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.BIGINT
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            address: {
                allowNull: false,
                type: DataTypes.STRING
            },
            city: {
                allowNull: false,
                type: DataTypes.STRING
            },
            state: {
                allowNull: false,
                type: DataTypes.STRING
            },
            pincode: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            country: {
                allowNull: false,
                type: DataTypes.STRING
            },
            mobile_no: {
                allowNull: false,
                type: DataTypes.STRING
            }
        }, {
            underscored: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    return Address;
}