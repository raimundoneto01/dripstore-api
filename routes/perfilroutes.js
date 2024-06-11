import express from "express";
import { perfilService } from "../services/perfilservice.js";


  var route = express.Router();

  const routePerfil = express.Router();


  routePerfil

  route.get("/", perfilService.getAll);
  route.get("/:id", perfilService.getById);
  route.post("/", perfilService.create);
  // route.get("/ativo/:ativo", produtoService.getAtivo);
  // route.put("/:id", produtoService.update);
  // route.delete("/:id", produtoService.delete);
  
   export default routePerfil;

