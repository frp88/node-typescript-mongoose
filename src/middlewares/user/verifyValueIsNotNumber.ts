import { NextFunction, Request, Response } from 'express'

export const verifyValueIsNotNumber: any = async (req: Request, res: Response, nextFunc: NextFunction) => {
  try {     
    const value: string = req.params.value || req.body.value;  
    if (Number.isInteger(value) == false) {
      return res.status(422).send({ 'Message': 'O valor informado não é um número.' })
    }

    return nextFunc()

  } catch (err) {
    throw new Error(err as any)
  }
}
