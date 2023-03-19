module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("Product", {
    category: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER(50),
        allowNull: false,
      },
      imgUrl: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      size: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
     
    });
    return product;
  };
  