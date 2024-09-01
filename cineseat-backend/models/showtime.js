module.exports = (sequelize, DataTypes) => {
    const Showtime = sequelize.define('Showtime', {
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      theater_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      showtime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    }, {});
  
    Showtime.associate = function(models) {
      Showtime.belongsTo(models.Movie, { foreignKey: 'movie_id' });
      Showtime.belongsTo(models.Theater, { foreignKey: 'theater_id' });
      Showtime.hasMany(models.Reservation, { foreignKey: 'showtime_id' });
    };
  
    return Showtime;
  };
  