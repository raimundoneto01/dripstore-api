import { DataTypes } from "sequelize";
import { sequelize } from "../db/dataBase.js";

export const Perfil = sequelize.define("perfil", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false,
    defaltValue: 1
  },
  
  data_cadastro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaltValue: new Date(),
  } 
},{
  timestamps: true, // Add this line to enable the default timestamp columns
  createdAt: 'data_cadastro', // Map 'createdAt' to 'data_cadastro'
  updatedAt: false, // Disable 'updatedAt' column if you don't need it
  tableName:'perfil'
});
