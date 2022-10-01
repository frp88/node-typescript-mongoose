import { Router } from 'express'
import middlewares from '../../middlewares' 
import controllers from '../../controllers' 

const route = Router()

route.get('/user',
  // colocar os middlewares
  middlewares.authorization.verifyToken,
  controllers.user.getUsers
)

// rota já autenticada via token [em testes]
route.get('/user/:id',
  middlewares.authorization.verifyToken,
  middlewares.verifyObjectIdIsValid,
  controllers.user.getUserById
)

route.post("/user/register", 
  // middlewares.user.verifyUserCpf,
  controllers.user.createUser
);
route.post("/user/login", 
  middlewares.user.verifyEmailNotFound,
  middlewares.user.verifyEmailAndPassword,
  controllers.user.loginUser
);

route.get('/user/teste/:create',
  middlewares.user.verifyValueIsNotNumber,
  middlewares.user.verifyWordHasMore3Letters,
  controllers.user.createUser
)

export default route