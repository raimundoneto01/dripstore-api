import express from "express";
import { produtoService } from "../services/produtosservice.js";

// export const produtoRoute = (app) => {
const routeProduto = express.Router();

routeProduto
  .get("/", produtoService.getAll)
  .get("/:id", produtoService.getById)
  .post("/", produtoService.create);
// route.get("/ativo/:ativo", produtoService.getAtivo);
// route.put("/:id", produtoService.update);
// route.delete("/:id", produtoService.delete);

export default routeProduto;
// app.use("/api/produto", route);
// };
