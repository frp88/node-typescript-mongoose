import express from 'express'
import config from "./infra/config";
import routes from './routes'

const app = express()

app.use(express.json())

app.use(...routes)

app.listen(config.PORT!, () => { 
  console.log(`Servidor back-end rodando em <http://localhost:${config.PORT}>`)
})