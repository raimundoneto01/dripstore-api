import { sequelize } from "./dataBase.js";





  
export const connection = async()=>{
  try {
    await sequelize.authenticate();
    console.log('Conectado com sucesso.');
  } catch (error) {
    console.error('Erro ao connectar o banco:', error);
  }
}
