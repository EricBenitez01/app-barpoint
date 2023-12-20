const express = require('express');
const path = require('path');

const authRoute = require('./routes/authRoute');
const usersRoutes = require('./routes/usersRoutes');
const benefitsRoutes = require('./routes/benefitsRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const transaction = require('./routes/transactionRoute');
const business = require('./routes/businessesRoutes');
const dashboard = require('./routes/dashboardRoutes');
const cors = require('cors');

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200', // Dominio de tu aplicación Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

// Configurar opciones de CORS
/* app.get('/', (req, res) => {
    res.send('Hola, Roberto!');
}); */

// Aplicar CORS solo a la ruta /users
app.use('/api/', authRoute, cors(corsOptions));
app.use('/api/', usersRoutes, cors(corsOptions));
app.use('/api/', benefitsRoutes, cors(corsOptions));
app.use('/api/', purchaseRoutes, cors(corsOptions));
app.use('/api/', transaction, cors(corsOptions));
app.use('/api/', business, cors(corsOptions));
app.use('/api/', dashboard, cors(corsOptions));

app.use(express.static(path.join(__dirname, '../../bar_point_frontend/dist/bar_point_frontend')));

// Ruta que maneja todas las solicitudes y las redirige al archivo 'index.html'
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../bar_point_frontend/dist/bar_point_frontend/index.html'));
});
/* app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
}) */
app.listen('3001', () => console.log('Server running in port 3001'));