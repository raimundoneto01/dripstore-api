import { sequelize } from "../db/dataBase";
import { Perfil } from "./perfil";
import { Produto } from "./produtomodel";
import { Usuario } from "./usuariomodel";

const bd = {};

bd.produto = Produto;
bd.usuario = Usuario;
bd.perfil = Perfil;

bd.perfil.belongsToMany(bd.usuario, {
  through: "usuario_perfil",
});
bd.usuario.belongsToMany(bd.perfil, {
  through: "usuario_perfil",
});

bd.PERFIS = ["usuario", "admin", "moderador"];
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("[INFO] DROP e resincroniza o bd");
  })
  .catch((error) => {
    console.error(`[ERROR] ao sincronizar o bd:, ${error}`);
  });
export default bd;
