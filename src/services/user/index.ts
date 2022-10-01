import { createUserService } from './createUserService'
import { getUserByIdService } from './getUserByIdService'
import { getUserByEmailAndPasswordService } from './getUserByEmailAndPasswordService'
import { getUsersService } from './getUsersService'
import { generateTokenUserService } from './generateTokenUserService'
import { updateTokenUserService } from './updateTokenUserService'

const users ={
    createUserService,
    getUsersService,
    getUserByEmailAndPasswordService,
    getUserByIdService,
    generateTokenUserService,
    updateTokenUserService
}

export default users
