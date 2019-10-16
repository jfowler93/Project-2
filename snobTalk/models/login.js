module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("login", {
    username: DataTypes.STRING,
    passwork: DataTypes.TEXT
  });
  return Login;
};
