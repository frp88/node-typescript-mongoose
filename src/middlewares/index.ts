import authorization from './authorization'
import user from './user'
import { verifyObjectIdIsValid } from './verifyObjectIdIsValid'

const middlewares = {
  authorization,
  verifyObjectIdIsValid,
  user
}

export default middlewares
