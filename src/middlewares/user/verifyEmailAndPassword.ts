import { NextFunction, Request, Response } from 'express'
import User from '../../models/user'

const bcrypt = require('bcrypt')

export const verifyEmailAndPassword: any = async (req: Request, res: Response, nextFunc: NextFunction) => {
  try {
    const { email, password }: any = req.body || req.params

    const user = await User.findOne({ email: email })  
    if (!user) {
      return res.status(422).json({ Message: 'Usuário não encontrado.' })
    }

    // Verifica a senha confere com a senha armazenada no BD
    const passwordOk = await bcrypt.compare(password, user.password)   
    if (!passwordOk) {
      return res.status(422).json({ Message: 'Senha inválida.' })
    }

    return nextFunc()

  } catch (err) {
    throw new Error(err as any)
  }
}
