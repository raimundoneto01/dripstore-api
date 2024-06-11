import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db/dataBase.js";



export const Usuario = sequelize.define("usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  senha: {
    type: DataTypes.TEXT,
    allowNull: false,
  
  } 
},{
  timestamps: true, // Add this line to enable the default timestamp columns
  createdAt: 'data_cadastro', // Map 'createdAt' to 'data_cadastro'
  updatedAt: false // Disable 'updatedAt' column if you don't need it
});
