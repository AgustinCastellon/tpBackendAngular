const express = require('express')
const router = express.Router();

const transaccionCtrl = require('../controllers/transaccion.controller');

router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:email', transaccionCtrl.getTransaccionByEmail);
router.get('/divisas/:monedaOrigen/:monedaDestino', transaccionCtrl.getTransaccionByDivisas)

module.exports = router;

