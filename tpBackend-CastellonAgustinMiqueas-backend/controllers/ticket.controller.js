const Ticket = require('../models/ticket');

const ticketCtrl = {};

ticketCtrl.getTickets = async (req, res) => {
    const tickets = await Ticket.find().populate('espectador');
    res.json(tickets);
}

ticketCtrl.createTicket = async (req, res) => {
    const ticket = new Ticket(req.body);
    try {
        await ticket.save();
        res.json({
            "status": 1,
            "msg": "ticket guardado"
        });
    } catch (error) {
        res.status(400).json({
            "status": 0,
            "msg": "Error al guardar el ticket"
        })
    }
}

ticketCtrl.deleteTicket= async (req, res) => {
    try{
        await Ticket.deleteOne({_id: req.params.id});
        res.json({
            "status": 1,
            "msg": "ticket eliminado"
        })
    } catch(error){
        res.status(400).json({
            "status": 0,
            "msg": "Error al eliminar el ticket"
        })
    }     
    
}

ticketCtrl.editTicket = async (req, res) =>{
    const ticket = new Ticket(req.body);
    try{
        const { precioTicket, categoriaEspectador, fechaCompra} = req.body;
        await Ticket.updateOne(
            { _id: req.params.id },
            { $set: { precioTicket, categoriaEspectador, fechaCompra} }
        );
    } catch (error) {
        console.error("Error en editTicket:", error);
        res.status(400).json({
            "status": 0,
            "msg": "Error al editar el ticket"
        });
    }
}

ticketCtrl.getTicketByCategoria = async (req, res) =>{
    try{
        const tickets = await Ticket.find({categoriaEspectador: req.params.categoria}).populate('espectador');
        const espectadores = tickets.map(ticket => ticket);
        res.json(espectadores);
    } catch(error){
        res.status(400).json({
            "status": 0,
            "msg": "Error al buscar el ticket"
        })
    }
}

ticketCtrl.getTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id).populate('espectador');
        res.json(ticket);
    } catch (error) {
        res.status(400).json({
            "status": 0,
            "msg": "Error al obtener el ticket"
        });
    }
}

module.exports = ticketCtrl