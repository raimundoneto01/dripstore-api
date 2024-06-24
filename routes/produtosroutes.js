import express from "express";
import { produtoService } from "../services/produtosservice.js";

// export const produtoRoute = (app) => {
const routeProduto = express.Router();

routeProduto
  .get("/", produtoService.getAll)
  .get("/:id", produtoService.getById)
  .post("/", produtoService.create);


export default routeProduto;
// app.use("/api/produto", route);
// };
