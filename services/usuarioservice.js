
import { Usuario} from '../model/usuariomodel.js';
import winston from 'winston';


export const usuarioService = {
  getAll: async (req, res)=>{
    const usuario = await Usuario.findAll();
    return res.status(200).json(usuario);
  },
  getById: async (req, res)=>{
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);

    if(!usuario){
      return res.status(404).json({message: `Produto com o id: ${id} não encontrado.`}) 
    }
    return res.status(200).json(usuario)
  },
  getAtivo: async (req, res)=>{
    const ativo = req.params.ativo ==="true"? true : false;
    const usuario = await Usuario.findAll(
      {
        where: {
          ativo
        }
      }
    );
    return res.status(200).json(usuario) 
  
  },

  create: async (req, res )=>{
    const usuario = req.body;
    const usuarioBd = await Usuario.create(usuario)   

      return res.status(201).json({
        message:"produto criado com sucesso"
      })
  },

  update: async (req, res)=>{
    const usuario = req.body;
    const usuarioBD = await Usuario.update(
      usuario,
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json({ 
      data: usuarioBD ,
      message: "ProdutoAtualizado com sucesso"
      })
  },

  delete: async (req, res)=>{
    const id = req.params.id;
    const usuario = await Usuario.destroy(
      {
        where: {
          id: id
        }
      },
    )

    return res.status(200).json({
      messege: `O Produto com o id: ${id}, foi deletado cm sucesso`
    })
  }
  
  
}
