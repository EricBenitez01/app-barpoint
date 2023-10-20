require('dotenv').config();
const express = require('express');
const path = require('path');

const authRoute = require('./routes/authRoute');
const usersRoutes = require('./routes/usersRoutes');
const benefitsRoutes = require('./routes/benefitsRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const transaction = require('./routes/transactionRoute');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200', // Dominio de tu aplicación Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
};
app.use(express.static(path.join(__dirname, '../../bar_point_frontend/dist')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

// Configurar opciones de CORS
/* app.get('/', (req, res) => {
    res.send('Hola, Roberto!');
}); */
  
// Aplicar CORS solo a la ruta /users
app.use('/api/auth', authRoute, cors(corsOptions));
app.use('/api/users', usersRoutes, cors(corsOptions));
app.use('/api/benefits', benefitsRoutes, cors(corsOptions));
app.use('/api/purchase', purchaseRoutes, cors(corsOptions));
app.use('/api/transaction', transaction, cors(corsOptions));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../bar_point_frontend/dist'));
});

app.listen('3002', () => console.log('Server running in port 3002'));