const { startServer } = require('@evershop/evershop');
const path = require('path');

// Esto arranca el motor de Evershop en el entorno de Vercel
startServer(path.resolve(__dirname));