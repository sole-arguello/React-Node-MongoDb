import path from 'path';
import { fileURLToPath } from 'url';
import { configEnv } from './config/configEnv.js';

export const __dirname = path.dirname(fileURLToPath(import.meta.url));