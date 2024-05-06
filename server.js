import express from "express"
const app = express()

const HOST = "localhost"
const PORT = 5005

app.get('/', (req, res) => {
  res.send({
    message: "Servidor Rodou, Chupa essa Manga" ,
    status: 200
  })
})

app.listen(PORT, () => {
  console.log(`O Servidor está rodando na porta http://${HOST}:${PORT}`)
})