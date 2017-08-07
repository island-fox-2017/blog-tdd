'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controller/article')

// router.get('/', function(req,res){
//   res.send([{judul:'Melali sambil Melajah'}])
// })


router.get('/', controller.getAllArticle)
router.post('/', controller.createArticle)
router.get('/:id', controller.getOneArticle)
router.delete('/:id', controller.deleteArticle)
router.put('/:id', controller.updateArticle)


module.exports = router;
