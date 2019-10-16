module.exports = function(sequelize, DataTypes) {
    var Movies = sequelize.define("movies", {
        name: DataTypes.STRING,
    });
    return Movies;
};