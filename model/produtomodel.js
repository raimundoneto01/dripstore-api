import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db/dataBase.js";

export const Produto = sequelize.define("produtos", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desconto: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  categoria: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  data_cadastro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaltValue: new Date(),
  } 
},{
  timestamps: true, // Add this line to enable the default timestamp columns
  createdAt: 'data_cadastro', // Map 'createdAt' to 'data_cadastro'
  updatedAt: false // Disable 'updatedAt' column if you don't need it
});
