import { Request, Response } from 'express'
import servicesUser from '../../services/user'

export const getUsers: any = async (req: Request, res: Response) => {
  try {
    const users: any = await servicesUser.getUsersService()
    
    return res.status(200).send(users)

  } catch (error: any) {
    return res.status(400).send({ 'Message': error.message })
  }
}
