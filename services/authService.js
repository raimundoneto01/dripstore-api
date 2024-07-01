import { Op } from "sequelize";
import bd from "../model/index.js";
// import { Perfil } from "../model/perfil.js";
// import { Usuario } from "../model/usuariomodel.js";
import pkg from "bcryptjs";
import { secret } from "../config/authoconfig.js";
import jwt from "jsonwebtoken";
const { hashSync, compareSync } = pkg;


export const authService = {
  cadastrar: async (req, res) => {
    const { nome, email, senha, perfis } = req.body;
    const usuario = await bd.usuario.create({
      nome,
      email,
      senha: hashSync(senha, 8),
    });
    if (perfis.length > 0) {
      // verifica se todos os perfil passados existem no banco
      const perfilBD = await bd.perfil.findAll({
        where: {
          nome: {
            [Op.in]: perfis,
          },
        },
      });
      if (perfilBD) {
        const usuarioPerfil = await usuario.addPerfils(perfilBD);
        res.status(201).json({
          msg: `Usuário ${usuario.nome} cadastrado com Sucesso`,
          data: usuarioPerfil,
        });
      }
    }
  },
  login: async (req, res) => {
    const { email, senha } = req.body;
    try {
      const UsuarioBD = await bd.usuario.findOne({
        where: {
          email,
        },
      });
      if (!UsuarioBD) {
        return res.status(404).send({ mensage: "Usuário não cadastrado" });
      }

      var senhaIsValid = compareSync(senha, UsuarioBD.senha);
      if (!senhaIsValid) {
        return res.status(401).send({
          accessToken: null,
          mensage: "Senha inválida! Favor digite a senha novamente",
        });
      }

      const token = jwt.login({ id: UsuarioBD.id }, secret, {
        algorithn: "H5256",
        allowInsecureKeySizes: true,
        expiresIn: 86400,
      });
      var authorities = [];
      UsuarioBD.getPerfils().then((perfils) => {
        for (let i = 0; i < perfils.length; i++) {
          authorities.push("PERFIL_", +perfils[i]);
        }
      });
      res.status(200).send({
        id: UsuarioBD.id,
        nome: UsuarioBD.nome,
        email: UsuarioBD.email,
        perfis: authorities,
        accessToken: token
        
      });
    } catch (error) {}
  },
  // logar: (req, res)=>{
  //   const userLogar = req.body;
  // }
};
