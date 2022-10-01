import { NextFunction, Request, Response } from 'express'
import { isObjectId } from '../helpers/isObjectId'; 

export const verifyObjectIdIsValid: any = async (req: Request, res: Response, nextFunc: NextFunction) => {
  try {     
    const id: string = req.params.id || req.body.id;  
    if (!isObjectId(id)){
      return res.status(400).send({ 'Message': 'ObjectId inválido.' })
    }

    return nextFunc()

  } catch (err) {
    throw new Error(err as any)
  }
}
