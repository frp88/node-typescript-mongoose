import { NextFunction, Request, Response } from 'express'
import User from '../../models/user'

export const verifyEmailNotFound: any = async (req: Request, res: Response, nextFunc: NextFunction) => {
  try {
    const { email }: any = req.body || req.params
    const user = await User.find({ email: email })  
   
    if (user.length <= 0) {
      return res.status(422).send({ 'Message': 'E-mail não encontrado.' })
    }

    return nextFunc()

  } catch (err) {
    throw new Error(err as any)
  }
}
