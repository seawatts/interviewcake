// import * as dotenv from 'dotenv';
import { filter } from 'lodash';
import util from 'util';
import createLogger from '../services/logger';
const logger = createLogger('index');
// dotenv.config();
interface IResultObject {
  [index: number]: boolean;
}

export default function findUniqueIntAmongDuplicates(ids: number[]): number[] {
  if (ids.length === 0) {
    throw new Error('There must be values in the array');
  }

  const cache = {};
  const done: IResultObject = {};

  logger.debug(`input ${ids}`);

  for (const id of ids) {
    logger.debug(`c: ${util.inspect(cache)} d: ${util.inspect(done)}`);
    if (id in cache) {
      cache[id]++;
    } else {
      cache[id] = 1;
    }

    if (cache[id] === 2) {
      done[id] = true;
    } else {
      done[id] = false;
    }
  }
  const result = Object.keys(done).filter(key => !done[key]).map(d => Number.parseInt(d));

  logger.debug(`result: ${result}`);

  return result;
}
