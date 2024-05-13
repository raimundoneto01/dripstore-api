
import { DataTypes } from "sequelize";
import { connection } from "../db/db.js";

 const produto= connection.define('produtos', {
  nome: {
    type: connection.Sequelize.STRING,
    allowNull :false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desconto: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  categoria: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  data_cadastro: {
    type: DataTypes.DATE,
    allowNull: false,
    defaltValue: new Date()
  }
 })