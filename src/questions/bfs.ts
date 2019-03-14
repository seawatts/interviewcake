import * as dotenv from 'dotenv';
import createLogger from '../services/logger';
const logger = createLogger('index');
dotenv.config();

export default function bfs(network: any, source: string, destination: string) {
  const nodesToVisit = [source];
  const result: string[] = [];
  const howWeReachedNode = {};
  howWeReachedNode[source] = null;

  while (nodesToVisit.length !== 0) {
    const currentNode = nodesToVisit.shift();

    if (currentNode === destination) {
      // logger.info(`Found node: ${currentNode}`);
      break;
    }

    if (!currentNode) {
      logger.warn(`Couldn't find node: ${currentNode}`);
      break;
    }

    const neighbors = network[currentNode];

    if (!neighbors) {
      continue;
    }

    for (const neighbor of neighbors) {
      if (neighbor in howWeReachedNode) {
        continue;
      }

      nodesToVisit.push(neighbor);
      howWeReachedNode[neighbor] = currentNode;
    }
  }

  let node = destination;

  while (node !== null) {
    result.unshift(node);
    node = howWeReachedNode[node];
  }

  return result;
}
