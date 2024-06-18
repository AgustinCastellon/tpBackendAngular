const Transaccion = require('../models/transaccion');

const transaccionCtrl = {};

transaccionCtrl.getTransacciones = async (req, res) => {
    const transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async(req, res) => {
    try{
        const {monedaOrigen, cantidadOrigen, monedaDestino, emailCliente, cantidadDestino} = req.body;
        const nuevaTransaccion = new Transaccion({
            monedaOrigen,
            cantidadOrigen,
            monedaDestino,
            cantidadDestino,
            emailCliente,
        });
        await nuevaTransaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardada.'
        });

    } catch(error){
        res.status(400).json({
            'status': '0',
           'msg': 'Error al guardar la transaccion'
        });
    }
}

transaccionCtrl.getTransaccionByEmail = async (req, res) => {
    const transaccion = await Transaccion.find({emailCliente: req.params.email});
    res.json(transaccion);
}

transaccionCtrl.getTransaccionByDivisas = async (req, res) =>{
    try{
        const {monedaOrigen, monedaDestino} = req.params;
        const transacciones = await Transaccion.find({monedaOrigen, monedaDestino})
        res.json(transacciones);

    } catch(error){
        res.status(400).json({
            'status': '0',
           'msg': 'Error al buscar las transacciones'
        });
    }

}

module.exports = transaccionCtrl;
