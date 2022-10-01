import { NextFunction, Request, Response } from 'express'
import config from '../../infra/config'

const jwt = require('jsonwebtoken')

export const verifyToken: any = async (req: Request, res: Response, nextFunc: NextFunction) => {

  const authHeader = req.headers['authorization']
  //const token = String(req.headers['authorization'])
  const token = authHeader && authHeader.split(" ")[1]  
  
  if (!token){
    return res.status(401).json({ auth: false, message: 'Token não enviado.' })
  }
  try {

    const secret = config.JWT_SECRET
    jwt.verify(token, secret)

    return nextFunc();    

  } catch (e) {
    //throw new Error(e as any);
    return res.status(400).json({ auth: false, message: 'Token inválido.' })
  }
}
