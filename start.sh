#!/bin/bash

# Salir en caso de error
set -e

# Ruta al proyecto backend
BACKEND_DIR="./backend"
FRONTEND_DIR="./frontend"

# Función para iniciar el backend
start_backend() {
  echo "Starting backend configuration..."

  # Cambiar al directorio backend
  cd $BACKEND_DIR

  # Instalar dependencias
  echo "Installing backend dependencies..."
  npm install

  # Crear la base de datos MySQL si no existe
  echo "Creating the MySQL database..."
  mysql -u root -e "CREATE DATABASE IF NOT EXISTS cristianmachadoDB;"

  # Configurar el archivo de configuración del backend para MySQL
  echo "Configuring the backend configuration file for MySQL..."
  sed -i 's/dialect:.*,/dialect: "mysql",/' config/database.js
  sed -i 's/username:.*,/username: "root",/' config/database.js
  sed -i 's/"",/"",/' config/database.js
  sed -i 's/"cristianmachadoDB"/"cristianmachadoDB"/' config/database.js


  # Sincronizar la base de datos (crear esquemas, etc.)
  echo "Synchronizing the database..."
  node -e "require('./config/database').sync()"

  # Iniciar el servidor backend en segundo plano
  echo "Starting the backend server..."
  nohup npm start &

  # Volver al directorio raíz
  cd - > /dev/null
}

# Función para iniciar el frontend
start_frontend() {
  echo "Starting frontend configuration..."

  # Cambiar al directorio frontend
  cd $FRONTEND_DIR

  # Instalar dependencias
  echo "Installing frontend dependencies..."
  npm install

  # Iniciar el servidor frontend
  echo "Starting the frontend server..."
  npm start

  # Abrir el navegador
  if command -v xdg-open > /dev/null; then
    xdg-open "http://localhost:3000"
  elif command -v open > /dev/null; then
    open "http://localhost:3000"
  elif command -v start > /dev/null; then
    start "http://localhost:3000"
  fi

  # Volver al directorio raíz
  cd - > /dev/null
}

# Iniciar el backend y frontend
start_backend
start_frontend

echo "The application is running."
