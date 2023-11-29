const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Users extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    funds: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      validate: {
        isDecimal: true,
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUserPwData) {
        try {
          newUserPwData.username = newUserPwData.username.toLowerCase();
          newUserPwData.password = await bcrypt.hash(
            newUserPwData.password,
            10
          );
          return newUserPwData;
        } catch (error) {
          console.error("Error hashing password:", error);
          throw new Error("Error hashing password");
        }
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
  }
);

module.exports = Users;
