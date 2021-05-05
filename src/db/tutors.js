module.exports = (sequelize, DataTypes) => {
  const Tutor = sequelize.define(
    "student",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      country: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    },
    {
      timestamps: false,
    }
  );
  return Tutor;
};
