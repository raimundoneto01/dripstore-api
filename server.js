import express from "express";
import { connection } from "./db/db.js";
import { produtoRoute } from "./routes/produtosroutes.js";
import cors from 'cors'

const app = express();

app.use(cors())

const HOST = "localhost";
const PORT = 5005;
// configuração do sequelize com o banco....
connection();

// converte o valor recebido via requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    message: "Servidor Rodou, Chupa essa Manga",
    status: 200,
  });
});

produtoRoute(app);

app.listen(PORT, () => {
  console.log(`O Servidor está rodando na porta http://${HOST}:${PORT}`);
});
