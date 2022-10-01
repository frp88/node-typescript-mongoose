import { createUser } from './createUser'
import { loginUser } from './loginUser'
import { getUsers } from './getUsers'
import { getUserById } from './getUserById'

const users = {
  getUsers,
  loginUser,
  createUser,
  getUserById
}

export default users
