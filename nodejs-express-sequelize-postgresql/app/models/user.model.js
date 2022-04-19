module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      Username: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      }
    });
    return User;
  };
  