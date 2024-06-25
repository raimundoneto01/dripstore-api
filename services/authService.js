
import { Op } from "sequelize";
import bd from "../model/index.js"
import { Perfil } from "../model/perfil.js";
import { Usuario } from "../model/usuariomodel.js";
import pkg from 'bcryptjs';
const { hashSync } = pkg;



export const authService = {
  cadastrar: async(req, res)=>{
    const { nome, email, senha, perfis} = req.body;
    const usuario = await bd.usuario.create({
      nome,
      email,
      senha: hashSync(senha, 8)
    })
    if(perfis.length > 0){
      // verifica se todos os perfil passados existem no banco
      const perfilBD =await bd.perfil.findAll({
        where: {
          nome: {
            [Op.in]: perfis
          }
        }
      })
      if(perfilBD){
        const usuarioPerfil = await usuario.addPerfils(perfilBD)
        
        res.status(201).json({
          msg: `Usuário ${usuario.nome} cadastrado com Sucesso`,
          data: usuarioPerfil
        })
      }
    }
    
  }
      




  // login: async (req, res)=>{
  //   const { email, senha} = req.body;
    
    
  // }
  // logar: (req, res)=>{
  //   const userLogar = req.body;
  // }
}