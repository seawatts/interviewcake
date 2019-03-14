import chalk from 'chalk';
import createDebug, { IDebugger } from 'debug';
import util from 'util';
import * as config from './config';

const logLevels = ['debug', 'info', 'success', 'warn', 'error', 'silent'];

const defaultLevels: { [env: string]: string } = {
  development: 'debug',
  production: 'info',
  test: 'info'
};

const currentLogLevel = defaultLevels[config.get('environment')];

export default function createLogger(namespace: string) {
  createDebug.enable(config.get('debug') || '');
  const logger = createDebug(`${config.get('name')}:${namespace}`);
  // tslint:disable-next-line:no-console
  // logger.log = console.log.bind(console); // don't forget to bind to console!

  const info = createChalkLogger(logger, 'info', chalk.white);
  const success = createChalkLogger(logger, 'success', chalk.greenBright);
  const debug = createChalkLogger(logger, 'debug', chalk.blueBright);
  const warn = createChalkLogger(logger, 'warn', chalk.yellowBright);
  const error = createChalkLogger(logger, 'error', chalk.redBright);

  return {
    debug,
    error,
    info,
    success,
    warn
  };
}

// tslint:disable-next-line:ban-types
function createChalkLogger(logger: IDebugger, logLevel: string, color: Function) {
  if (logLevels.indexOf(currentLogLevel) <= logLevels.indexOf(logLevel)) {
    return (...args: any[]) => logger(color(args.map(a => typeof a === 'string' ? a : util.inspect(a))));
  }

  return () => null;
}
