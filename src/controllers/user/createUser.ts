import { Request, Response } from 'express'
import servicesUser from '../../services/user'

export const createUser: any = async (req: Request, res: Response) => {
  const { name, email, password }: any = req.body
  try {
    const user = await servicesUser.createUserService(name, email, password)
    
    return res.status(201).json({'Usuário cadastrado com sucesso': user})
    
  } catch (error: any) {
    return res.status(400).json({ 'Message': error.message })
  }
}


