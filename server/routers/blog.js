'use strict'

const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.get('/test', blogController.test);

router.get('/', blogController.findAll);
router.get('/:id', blogController.findOne);
router.post('/', blogController.createOne);
router.delete('/:id', blogController.deleteOne);
router.put('/:id', blogController.updateOne);

module.exports = router;
