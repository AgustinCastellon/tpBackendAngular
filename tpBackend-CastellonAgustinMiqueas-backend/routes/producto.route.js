const express = require('express')
const router = express.Router();

const productoCtrl = require('../controllers/producto.controller');

router.get('/', productoCtrl.getProductos);
router.get('/destacados', productoCtrl.getProductosDestacado)
router.post('/', productoCtrl.createProducto);
router.get('/:id', productoCtrl.getProducto);
router.put('/:id', productoCtrl.editProducto)
router.delete('/:id', productoCtrl.deleteProducto)

module.exports = router;