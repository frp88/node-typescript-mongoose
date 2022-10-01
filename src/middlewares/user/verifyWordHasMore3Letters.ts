import { NextFunction, Request, Response } from 'express'

export const verifyWordHasMore3Letters: any = async (req: Request, res: Response, nextFunc: NextFunction) => {
  try {   

    const word: string = req.params.word || req.body.word

    if (word.length < 3) {
      return res.status(400).send({ 'Message': 'A palavra possui menos de 3 caracteres.' })
    }

    return nextFunc()

  } catch (err) {
    throw new Error(err as any)
  }
}
