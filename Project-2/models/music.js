module.exports = function(sequelize, DataTypes) {
    var Music = sequelize.define("music", {
        name: DataTypes.STRING,
    });
    return Music;
};