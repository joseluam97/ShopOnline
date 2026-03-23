import { startServer } from '@evershop/evershop';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Arrancamos el servidor
startServer(__dirname);