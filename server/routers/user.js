'use strict'

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../helpers/auth')

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/', authMiddleware, userController.findAll);

module.exports = router;
