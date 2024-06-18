const Producto = require('../models/producto');

const productoCtrl = {};

productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
}

productoCtrl.getProductosDestacado = async (req, res) =>{
    const productos = await Producto.find({destacado: true});
    res.json(productos);
}
productoCtrl.createProducto = async (req, res) => {
    const {nombre, descripcion, imagen, precio, stock, destacado } = req.body;
    const producto = new Producto({nombre, descripcion, imagen, precio, stock, destacado});
    try {
        await producto.save();
        res.json({
            'status': '1',
            'msg': 'Producto guardado.'
        });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(400).json({
            'status': '0',
            'msg': 'Error al guardar el producto',
            'error': error.message
        });
    }

}
productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
}

productoCtrl.editProducto = async (req, res) => {
    const producto = new Producto(req.body);
    try{
        await Producto.updateOne({_id: req.body._id}, producto);
        res.json({
            'status': '1',
            'msg': 'Producto editado.'
        });
    } catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al editar el producto'
        });
    }
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Producto eliminado.'
        });
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar el producto'
        });
    }
}

module.exports = productoCtrl;