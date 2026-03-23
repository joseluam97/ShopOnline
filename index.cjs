const { startServer } = require('@evershop/evershop');

// En CommonJS (.cjs), no necesitamos 'import.meta' ni 'fileURLToPath'. 
// Simplemente usamos el comando de arranque estándar de Evershop.
startServer(process.cwd());