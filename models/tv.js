module.exports = function(sequelize, DataTypes) {
    var TV = sequelize.define("TV", {
        name: DataTypes.STRING,
    });
    return TV;
};