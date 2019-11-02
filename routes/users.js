const express = require('express');
const userRouter = express.Router();
const usersController = require('../controllers/users-controller');
const favoritesController = require('../controllers/favorites-controller');
const authHelpers = require('../services/auth/auth-helpers');

userRouter.get('/', authHelpers.loginRequired, usersController.index);
userRouter.post('/', authHelpers.loginRequired, favoritesController.create);

userRouter.get('/:id', favoritesController.show);
userRouter.get('/:id/edit', authHelpers.loginRequired, favoritesController.edit);
userRouter.put('/:id', authHelpers.loginRequired, favoritesController.update);
userRouter.delete('/:id', authHelpers.loginRequired, favoritesController.delete);

module.exports = userRouter;