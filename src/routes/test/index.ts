import { Router, Request, Response } from 'express'

const route = Router()

route.get('/', (req: Request, res: Response) => {  
  res.status(200).json({ message: `Servidor Back-end em execução...` })
})

route.get(`/esp`, (req: Request, res: Response) => {
    res.status(200).send(`<html><body>Notícias de Esportes</body></html>`)
})

route.get(`/tec`, (req, res) => {
    res.status(200).send(`<html><body><strong>Notícias de Tecnologia</strong></body></html>`)
})

export default route