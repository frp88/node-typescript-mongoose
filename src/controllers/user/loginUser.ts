import { Request, Response } from 'express'
import servicesUser from '../../services/user'

export const loginUser: any = async (req: Request, res: Response) => {
  const { email }: any = req.body || req.params
  try {
    // Chama serviço que gera o Token para o Usuário
    const resp = await servicesUser.generateTokenUserService(email)
    
    if (resp.Token == ''){
      return res.status(400).json({ 'Message': 'Erro ao gerar o token.'})
    }

    // Chama o serviço que Atualiza o token do usuário no BD
    // servicesUser.updateTokenUserService(email, resp.Token)

    // Retorna o token gerado
    return res.status(201).json({'Token gerado': resp.Token})

  } catch (error: any) {
    return res.status(400).json({ 'Message': error.message })
  }
}


