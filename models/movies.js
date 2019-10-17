module.exports = function(sequelize, DataTypes) {
    var Movies = sequelize.define("movies", {
        title: DataTypes.STRING,
        genre: DataTypes.TEXT
    });
    return Movies;
};