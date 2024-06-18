const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');
const bodyParser = require('body-parser');
var app = express();
// Configuración para permitir un tamaño de carga útil más grande
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
//middlewares
app.use(express.json());
app.use(cors());
//Cargamos el modulo de direccionamiento de rutas
app.use('/api/producto', require('./routes/producto.route.js'));
app.use('/api/transaccion', require('./routes/transaccion.route.js'));
app.use('/api/espectador', require('./routes/espectador.route.js'));
app.use('/api/ticket', require('./routes/ticket.route.js'))
//app.use('/api/sector', require('./routes/sector.route'));
//setting
app.set('port', process.env.PORT || 3000);
//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'))
})