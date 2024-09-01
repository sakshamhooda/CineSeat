module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    showtime_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seat_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});

  Reservation.associate = function(models) {
    Reservation.belongsTo(models.User, { foreignKey: 'user_id' });
    Reservation.belongsTo(models.Showtime, { foreignKey: 'showtime_id' });
  };

  return Reservation;
};
