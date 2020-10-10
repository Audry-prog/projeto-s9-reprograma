const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.status(200).send({ 
        title: 'Sistema Integrado de Estoque e Gestão de Pessoas', 
        author: 'Audry Ávalos',
        version: '1.0.0'})
})

module.exports = router;