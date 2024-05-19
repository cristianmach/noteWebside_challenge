const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const noteRoutes = require('./routes/noteRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3001' })); // Permitir solicitudes solo desde el puerto 3001

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connected to the database');
    app.use('/api', noteRoutes);
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
