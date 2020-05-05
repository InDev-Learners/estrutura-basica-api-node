const { Router } = require('express');
const userController = require('../controllers/user.controller');

const router = new Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.create);
router.get('/users/:id', userController.getOne);


module.exports = router;
