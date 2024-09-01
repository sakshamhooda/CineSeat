module.exports = (sequelize, DataTypes) => {
    const Theater = sequelize.define('Theater', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      number_of_screens: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {});
  
    Theater.associate = function(models) {
      Theater.hasMany(models.Showtime, { foreignKey: 'theater_id' });
    };
  
    return Theater;
  };
  