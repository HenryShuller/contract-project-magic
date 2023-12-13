'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,UserCards}) {
      this.hasMany(UserCards{foreignKey:"cardId"})
      this.belongsTo(User{foreignKey:"userId"})
      // define association here
    }
  }
  Card.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    newold: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model:'Users',
        key:"id",
      },
      onDelete:"cascade"
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};