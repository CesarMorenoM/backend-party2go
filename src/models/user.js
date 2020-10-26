const Sequelize = require('sequelize');

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    km: {
        type: DataTypes.DECIMAL(10, 2)
    }
  });

  return User;
};
export default user;