const express = require('express');
const router = require.Router();
const funcionarios = require('../controller/funcionariosController');

router.get('/', controller.getAll);
router.get('/funcionarios', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.postFuncionario);
router.delete('/:id', controller.deleteFuncionario);

module.exports = router;