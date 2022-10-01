import { Request, Response } from 'express'
import servicesUser from '../../services/user'

export const getUserById: any = async (req: Request, res: Response) => {
  const id: string = req.params.id || req.body.id
  try {    

    const user: any = await servicesUser.getUserByIdService(id)
    
    return res.status(200).send(user)
  } catch (error: any) {
    return res.status(400).send({ 'Message': error.message })
  }
}
