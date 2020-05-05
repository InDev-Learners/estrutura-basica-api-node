const { Router } = require('express');
const userController = require('../controllers/user.controller');

const router = new Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.create);
router.get('/users/:id', userController.getOne);
router.put('/users/:id', userController.update);

module.exports = router;
