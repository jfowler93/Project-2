module.exports = function(sequelize, DataTypes) {
    var Discussion = sequelize.define("discussion", {
        username: DataTypes.STRING,
        text: DataTypes.TEXT,
        parent_id: DataTypes.INTEGER,
        art_id: DataTypes.INTEGER,
        art_category: DataTypes.STRING
    });
    return Discussion;
};

// Discussion.sync();