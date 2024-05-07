import { Sequelize } from "sequelize"


const sequelize = new Sequelize('postgres://neondb_owner:BnmYEOk19wDF@ep-floral-fog-a5kl51q1.us-east-2.aws.neon.tech/neondb?sslmode=require')

  
export const connection = async()=>{
  try {
    await sequelize.authenticate();
    console.log('Conectado com sucesso.');
  } catch (error) {
    console.error('Erro ao connectar o banco:', error);
  }
}
