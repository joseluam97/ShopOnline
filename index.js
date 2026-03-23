import { startServer } from '@evershop/evershop';
import path from 'path';

// Forzamos la ruta al directorio raíz del proyecto en Vercel
const rootDir = process.cwd();

startServer(rootDir);