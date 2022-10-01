import { verifyEmailIsRegistered } from './verifyEmailIsRegistered'
import { verifyEmailNotFound } from './verifyEmailNotFound'
import { verifyEmailAndPassword } from './verifyEmailAndPassword'
import { verifyWordHasMore3Letters } from './verifyWordHasMore3Letters'
import { verifyValueIsNotNumber } from './verifyValueIsNotNumber'

const user = {
  verifyEmailIsRegistered,
  verifyEmailNotFound,
  verifyEmailAndPassword,
  verifyWordHasMore3Letters,
  verifyValueIsNotNumber
}

export default user
