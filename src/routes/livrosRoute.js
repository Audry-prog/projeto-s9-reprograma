const express = require('express');
const router = express.Router();
const controller = require('../controllers/livrosController');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.postLivro);
router.delete('/:id', controller.deleteLivro);

module.exports = router;