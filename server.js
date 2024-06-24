import express from "express";
import { connection } from "./db/db.js";
import cors from "cors";
import { routes } from "./routes/index.js";

const app = express();

// converte o valor recebido via requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

const HOST = "localhost";
const PORT = 5005;
// configuração do sequelize com o banco....
connection();

app.get("/", (req, res) => {
  res.send({
    message: "Servidor Rodou, Chupa essa Manga",
    status: 200,
  });
});

routes(app);

app.listen(PORT, () => {
  console.log(`O Servidor está rodando na porta http://${HOST}:${PORT}`);
});
