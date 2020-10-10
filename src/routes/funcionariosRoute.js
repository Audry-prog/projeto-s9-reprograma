const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionariosController');

router.get('/', controller.getAllFuncionarios)
router.get('/:id', controller.getFuncionarioById);
router.post('/', controller.postFuncionario);
router.delete('/:id', controller.deleteFuncionario);

module.exports = router;