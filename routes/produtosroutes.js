import express from "express";
import { produtoService } from "../services/produtosservice.js";

export const produtoRoute = (app) => {
  var route = express.Router();

  route.get("/", produtoService.getAll);
  route.get("/:id", produtoService.getById);
  route.get("/ativo/:ativo", produtoService.getAtivo);
  route.post("/", produtoService.create);
  route.put("/:id", produtoService.update);
  route.delete("/:id", produtoService.delete);
  

  
  app.use("/api/produto", route);
};
