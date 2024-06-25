import bd from "../model/index.js";
import { sequelize } from "./dataBase.js";

export const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado com sucesso.");
  } catch (error) {
    console.error("Erro ao connectar o banco:", error);
  }
};

// -->sincroniza a app com o banco usando o sequelize..

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("[INFO] DROP e resincroniza o bd");
    iniciarPerfis();
  })
  .catch((error) => {
    console.error(`[ERROR] ao sincronizar o bd:, ${error}`);
  });

const iniciarPerfis = async () => {
  const perfis = await bd.perfil.findAll();
  if (perfis.length === 0) {
    bd.perfil.create({
      id: 1,
      nome: "usuario",
      codigo: "USER",
    });
    bd.perfil.create({
      id: 2,
      nome: "moderador",
      codigo: "MID",
    });
    bd.perfil.create({
      id: 3,
      nome: "admin",
      codigo: "ADMIN",
    });
  }
};
