const { startServer } = require('@evershop/evershop');

// Usamos process.cwd() para asegurar que encuentre la carpeta .evershop y las extensiones
startServer(process.cwd());