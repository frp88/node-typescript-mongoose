import User from '../../models/user'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const fields = require('../../helpers/defaultUserFieldsNotReturned')

export const getUserByEmailAndPasswordService: any = async (email: string, password: string) => {  
  try {       
    const user = await User.findOne({email: email, password: password})
     if (!user){
      return { 'Message': 'Usuario ou senha inválidos' }
    }    
  
    return { 'Usuário': user}
   
  } catch (error: any) {
    throw new Error(error)
  }
}