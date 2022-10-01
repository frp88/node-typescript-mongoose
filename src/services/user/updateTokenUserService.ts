import User from '../../models/user'

const bcrypt = require('bcrypt')

export const updateTokenUserService: any = async (email: string, token: string) => {
  try {   
   
    const user = await User.findOneAndUpdate(
      { email: email }, 
      { token: token },
      { new: true }
    )   
    return user
  } catch (error: any) {
    throw new Error(error)
  }
}