module.exports = (sequelize, dataTypes) => {

    const alias = 'Transaction';
    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        userfk: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        businessfk: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        transaction_typefk: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    };

    const config = {
        tableName: "transaction",
        timestamps: false
    }

    const Transaction = sequelize.define(alias, cols, config);

    Transaction.associate = function (models) {
        Transaction.belongsTo(models.User, {
            as: "user",
            foreignKey: "userfk"
        }),
        Transaction.belongsTo(models.Business, {
            as: "business",
            foreignKey: "businessfk"
        }),
        Transaction.belongsTo(models.Transaction_type, {
            as: "transaction_type",
            foreignKey: "transaction_typefk"
        })
    };

    return Transaction;
}
