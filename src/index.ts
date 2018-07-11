import * as dotenv from 'dotenv';
import createLogger from './services/logger';
const logger = createLogger('server');
dotenv.config();

logger('hi');
