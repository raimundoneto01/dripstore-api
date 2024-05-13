import { Produto} from '../model/produtomodel.js'

export const produtoService = {
  getAll: async (req, res)=>{
    const produtos = await Produto.findAll();
    return res.status(200).json(produtos);
  }
}