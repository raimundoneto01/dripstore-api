import express from "express";
import { produtoService } from "../services/produtosservice.js";

export const produtoRoute = (app) => {
  var route = express.Router();

  route.get("/", produtoService.getAll);
  route.get("/:id", produtoService.getById);

  
  app.use("/api/produto", route);
};
