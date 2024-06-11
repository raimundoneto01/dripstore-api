import express from "express";

import { usuarioService } from "../services/usuarioservice.js";

// export const usuarioRoute = (app) => {
  var route = express.Router();

  const routeUsuario = express.Router();


  routeUsuario

  route.get("/", usuarioService.getAll);
  route.get("/:id", usuarioService.getById);
  route.post("/", usuarioService.create);
  // route.get("/ativo/:ativo", produtoService.getAtivo);
  // route.put("/:id", produtoService.update);
  // route.delete("/:id", produtoService.delete);
  
   export default routeUsuario;

