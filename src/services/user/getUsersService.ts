import User from '../../models/user'

export const getUsersService: any = async () => {  
  try { 
    const users = await User.find()
    // const users = await User.find((err, user) => {
    //   console.log(user)
    // })
    if (users.length > 0 ){
      return users
    } else {
      return { 'Message': 'Nenhum usuário cadastrado.' }
    }
  } catch (error: any) {
    throw new Error(error)
  }
}