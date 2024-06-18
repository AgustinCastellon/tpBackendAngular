const express = require('express');
const router = express.Router();

const espectadorCtrl = require('../controllers/espectador.controller');

router.get('/', espectadorCtrl.getEspectadores);

router.post('/', espectadorCtrl.createEspectador);

router.get('/:id', espectadorCtrl.getEspectador);

module.exports = router;