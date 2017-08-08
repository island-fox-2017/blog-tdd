var express = require('express');
var router = express.Router();
var articlesCtrl = require('../controllers/articlesController')

/* GET users listing. */
router.get('/', articlesCtrl.getAll);
router.get('/:id', articlesCtrl.getOne);
router.post('/', articlesCtrl.create)
router.post('/seed', articlesCtrl.seed)
router.put('/:id', articlesCtrl.update)
router.delete('/clear', articlesCtrl.removeAll)
router.delete('/:id', articlesCtrl.remove)


module.exports = router;
