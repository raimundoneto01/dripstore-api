import { sequelize } from "../db/dataBase";
import { Perfil } from "./perfil";
import { Produto } from "./produtomodel";
import { Usuario } from "./usuariomodel";


sequelize.sync({ force: true})
.then(()=>{
  console.log('[INFO] DROP e resincroniza o bd');
})
.catch((error)=>{
  console.error(`[ERROR] ao sincronizar o bd:, ${error}`);
  })


const bd = {};



bd.produto = Produto;
bd.usuario = Usuario;
bd.perfil = Perfil

export default bd;