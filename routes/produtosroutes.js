import express from 'express'
import { produtoService } from "../services/produtosservice"



const produtosRoute= ()=>{
  var route = express.router()

  route.get("/", produtoService.getAll())
}