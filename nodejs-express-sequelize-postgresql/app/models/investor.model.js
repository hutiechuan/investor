module.exports = (sequelize, Sequelize) => {
    const Investor = sequelize.define("investor", {
      investor_id: {
        type: Sequelize.INTEGER
      },
      firm: {
        type: Sequelize.TEXT
      },
      website: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      contact: {
        type: Sequelize.TEXT
      },
      phone_number: {
        type: Sequelize.TEXT
      },
      title: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      preferred_sectors: {
        type: Sequelize.TEXT
      },
      preferred_investment_size: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.TEXT
      },
      hq_city: {
        type: Sequelize.TEXT
      },
      hq_state: {
        type: Sequelize.TEXT
      },
    });
    return Investor;
  };
  