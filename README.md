Hello Ensolvers Team,

I present the result of my test to be part of your team, I hope you like it:

Repository link: https://github.com/cristianmach/noteWebside_challenge.git

PORTS LISTENING

- /backend is listening in port: http://localhost:3001/api/notes

- /frontend is listening in port: http://localhost:3000

  1. Requirements:

     /backend:
     package.json:
     {
     "name": "backend",
     "version": "1.0.0",
     "description": "",
     "main": "index.js",
     "scripts": {
     "start": "node server.js"
     },
     "keywords": [],
     "author": "",
     "license": "ISC",
     "dependencies": {
     "body-parser": "^1.20.2",
     "cors": "^2.8.5",
     "express": "^4.19.2",
     "mysql": "^2.18.1",
     "mysql2": "^3.9.7",
     "sequelize": "^6.37.3"
     },
     "devDependencies": {
     "nodemon": "^3.1.0"
     }
     }

     /frontend:
     package.json:
     {
     "name": "frontend",
     "version": "0.1.0",
     "private": true,
     "dependencies": {
     "@testing-library/jest-dom": "^5.17.0",
     "@testing-library/react": "^13.4.0",
     "@testing-library/user-event": "^13.5.0",
     "axios": "^1.6.8",
     "bootstrap": "^5.3.3",
     "react": "^18.3.1",
     "react-bootstrap": "^2.10.2",
     "react-dom": "^18.3.1",
     "react-scripts": "^5.0.1",
     "web-vitals": "^2.1.4"
     },
     "devDependencies": {
     "@babel/plugin-proposal-private-property-in-object": "^7.14.5",
     "autoprefixer": "^10.4.19"
     },
     "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
     "eject": "react-scripts eject"
     },
     "eslintConfig": {
     "extends": [
     "react-app",
     "react-app/jest"
     ]
     },
     "browserslist": {
     "production": [
     ">0.2%",
     "not dead",
     "not op_mini all"
     ],
     "development": [
     "last 1 chrome version",
     "last 1 firefox version",
     "last 1 safari version"
     ]
     }
     }

  2.Instructions:

  To access the program, you can directly open the "start.sh" file by double-clicking it, and it will execute (For Windows versions, use GitBash), or you can also access it by running the command "./start.sh" in the Visual Studio Code terminal.

  In case of any failure, you can navigate to the /backend directory and run the command "npm start". The same needs to be done for the /frontend directory; navigate to it and run the same command "npm start".

  3. Recommendations:

  The database engine is MySQL, in which the default user is "root" and there is no password set, so this field is empty "". If the MySQL configuration for your computer is different, please access the following path: "\backend\config\database.js" and once the "database.js" file is open, change the configuration according to the user established for your MySQL database, and do the same if a password is set:

  javascript

  const { Sequelize } = require('sequelize');

  const sequelize = new Sequelize('cristianmachadoDB', 'root', '', {
  host: 'localhost',
  dialect: "mysql",
  });

  module.exports = sequelize;

  Similarly, update the data in the "start.sh" file specifically on lines 28 and 29 of the code:

  sed -i 's/username:.\*,/username: "root",/' config/database.js
  sed -i 's/"",/"",/' config/database.js
