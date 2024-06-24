import express from "express";
import { perfilService } from "../services/perfilservice.js";


  var route = express.Router();

  const routePerfil = express.Router();


  routePerfil

  route.get("/", perfilService.getAll);
  route.get("/:id", perfilService.getById);
  route.post("/", perfilService.create);
  
   export default routePerfil;

