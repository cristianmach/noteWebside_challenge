const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Permitir solicitudes solo desde el puerto 3000

app.use('/api', noteRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
    await sequelize.sync({ alter: true }); // Sincronizar la base de datos y adaptar la estructura de las tablas
    app.listen(3001, () => {
      console.log('Server is running on port 3001');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();

 