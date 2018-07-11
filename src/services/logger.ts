import * as createDebug from 'debug';
import * as config from './config';
// import * as chalk from 'chalk';

// logger.log = console.log.bind(console); // don't forget to bind to console!

export default function createLogger(namespace: string) {
  createDebug.enable(config.get('debug') || '');
  const logger = createDebug(`${config.get('name')}:${namespace}`);
  logger.log = console.log.bind(console); // don't forget to bind to console!
  return logger;
}
