import User from '../../models/user'

// const fields = require('../../helpers/defaultFieldsNotReturned')

export const getUserByIdService: any = async (id: string) => {  
  try { 
    //const user = await User.findOne({ _id: id }, '-password')
    const fieldsNotReturned = ['-_id', '-password', '-createdAt', '-updatedAt', '-logins', '-__v']
    const user = await User.findOne({ _id: id }, fieldsNotReturned)
    //const user = await User.findOne({ _id: id }, fields.defaultFieldsNotReturned)    

    //if (user.length > 0 ){
    if (user){
      return user
    } else {
      return { 'Message': 'Nenhum usuário cadastrado com esse ID.' }
    }
  } catch (error: any) {
    throw new Error(error)
  }
}