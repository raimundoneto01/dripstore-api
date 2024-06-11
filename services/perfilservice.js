
import { Perfil} from '../model/perfil.js';
import winston from 'winston';


export const perfilService = {
  getAll: async (req, res)=>{
    const perfil = await Perfil.findAll();
    return res.status(200).json(perfil);
  },
  getById: async (req, res)=>{
    const id = req.params.id;
    const perfil = await Perfil.findByPk(id);

    if(!perfil){
      return res.status(404).json({message: `Produto com o id: ${id} não encontrado.`}) 
    }
    return res.status(200).json(perfil)
  },
  getAtivo: async (req, res)=>{
    const ativo = req.params.ativo ==="true"? true : false;
    const perfil = await Perfil.findAll(
      {
        where: {
          ativo
        }
      }
    );
    return res.status(200).json(perfil) 
  
  },

  create: async (req, res )=>{
    const perfil = req.body;
    const perfilBd = await Perfil.create(perfil)   

      return res.status(201).json({
        message:"produto criado com sucesso"
      })
  },

  update: async (req, res)=>{
    const perfil = req.body;
    const perfilBD = await Perfil.update(
      perfil,
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json({ 
      data: perfilBD ,
      message: "ProdutoAtualizado com sucesso"
      })
  },

  delete: async (req, res)=>{
    const id = req.params.id;
    const perfil = await Perfil.destroy(
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
