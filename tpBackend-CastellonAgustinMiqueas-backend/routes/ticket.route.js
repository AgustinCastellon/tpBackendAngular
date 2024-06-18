const express = require('express');
const router = express.Router();

const ticketCtrl = require('../controllers/ticket.controller')

router.get('/', ticketCtrl.getTickets);

router.get('/ticket/:id', ticketCtrl.getTicket);

router.post('/', ticketCtrl.createTicket);

router.delete('/:id', ticketCtrl.deleteTicket);

router.put('/:id', ticketCtrl.editTicket);

router.get('/:categoria', ticketCtrl.getTicketByCategoria)

module.exports = router;