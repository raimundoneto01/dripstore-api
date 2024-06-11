import { sequelize } from "./dataBase.js";


  
export const connection = async()=>{
  try {
    await sequelize.authenticate();
    console.log('Conectado com sucesso.');
  } catch (error) {
    console.error('Erro ao connectar o banco:', error);
  }
}

  // -->sincroniza a app com o banco usando o sequelize.. 

sequelize.sync({ force: true})
.then(()=>{
  console.log('[INFO] DROP e resincroniza o bd');
})
.catch((error)=>{
  console.error(`[ERROR] ao sincronizar o bd:, ${error}`);
  })
