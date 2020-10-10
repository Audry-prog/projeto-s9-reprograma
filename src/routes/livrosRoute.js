const express = require('express');
const router = express.Router();
const controller = require('../controller/livrosController');

router.get('/livros', controller.getAll);
router.get('/livros/:id', controller.getById);
router.post('/', controller.postLivro);
router.delete('/:id', controller.deleteLivro);

module.exports = router;