import express from "express";
import { usuarioService } from "../services/usuarioservice.js";

// export const usuarioRoute = (app) => {
  var route = express.Router();
  const routeUsuario = express.Router();

  routeUsuario
  route.get("/", usuarioService.getAll);
  route.get("/:id", usuarioService.getById);
  route.post("/", usuarioService.create);
  
  
   export default routeUsuario;

