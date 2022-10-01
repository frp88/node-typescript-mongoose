import User from '../../models/user'
import config from '../../infra/config'

const jwt = require('jsonwebtoken')

export const generateTokenUserService: any = async (email: string) => {  
  try {     
  
    const user = await User.findOne({email: email })
     if (!user){
      return { 'Message': 'Usuário não encontrado.' }
    }
    
    const secret = config.JWT_SECRET
    const token = jwt.sign(
      {
        id: user._id
      },
      secret, 
    )

    // updateTokenUserService(email, token)
    
    return { 'Token': token}
   
  } catch (error: any) {
    throw new Error(error)
  }
}