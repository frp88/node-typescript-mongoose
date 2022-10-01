import User from '../../models/user'

const bcrypt = require('bcrypt')

export const createUserService: any = async (name: string, email: string, password: string) => {
  try {   
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)
    
    const user =  new User({
        name: name,
        email: email,
        password: passwordHash
        //password: password
      })
      
    await user.save() 

    const fieldsNotReturned = [ '-password', '-createdAt', '-updatedAt', '-logins', '-__v']
    const userReturned = await User.findOne({ email: email }, fieldsNotReturned)

    return userReturned 

  } catch (error: any) {
    throw new Error(error)
  }
}