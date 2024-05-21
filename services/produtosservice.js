import { Produto} from '../model/produtomodel.js';
import winston from 'winston';




export const produtoService = {
  getAll: async (req, res)=>{
    const produtos = await Produto.findAll();
    return res.status(200).json(produtos);
  },
  getById: async (req, res)=>{
    const id = req.params.id;
    const produto = await Produto.findByPk(id);

    if(!produto){
      return res.status(404).json({message: `Produto com o id: ${id} não encontrado.`}) 
    }
    return res.status(200).json(produto)
  },

  create: async (req, res )=>{
    const produto = req.body;
    const produtoBd = await Produto.create(produto)   

      return res.status(201).json({
        message:"produto criado com sucesso"
      })
  },
  update: async (req, res)=>{
    const produto = req.body;
    const produtoBD = await Produto.update(
      produto,
      {
        where: {
          id: req.params.id
        }
      }
    )
   
    res.status(200).json({ 
      data: produtoBD ,
      message: "ProdutoAtualizado com sucesso"
      })
   
  }
 
  
}
