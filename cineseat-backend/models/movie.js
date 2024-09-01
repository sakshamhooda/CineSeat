module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
      },
      duration: {
        type: DataTypes.INTEGER,
      },
    }, {});
  
    Movie.associate = function(models) {
      Movie.hasMany(models.Showtime, { foreignKey: 'movie_id' });
    };
  
    return Movie;
  };
  