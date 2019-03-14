import createLogger from '../services/logger';
const logger = createLogger('index');

interface ITrieNode {
  char: string;
  isLeafNode: boolean;
  childNodes: ITrieNode[];
}

export default function sequenceOfChars(chars: string[]): string {
  if (chars.length === 0) {
    throw new Error('There must be values in the array');
  }

  const result = '';

  logger.debug(`input ${chars}`);

  const graph = [];

  const rootNode: ITrieNode = {
    char: '',
    childNodes: [],
    isLeafNode: false
  };

  for (const char of chars) {
    const newTrieNode = createTrieNode(char);
    insertIntoGraph(rootNode, newTrieNode);
  }

  return result;
}

function createTrieNode(char: string) {
  const newNode: ITrieNode = {
    char: '',
    childNodes: [],
    isLeafNode: false
  };

  const chars = char.split('');
  let lastNode = newNode;

  for (let i = 0; i < chars.length; i++) {
    const childNode: ITrieNode = {
      char: chars[i],
      childNodes: [],
      isLeafNode: false
    };

    if (i === chars.length - 1) {
      childNode.isLeafNode = true;
    }

    lastNode.childNodes.push(childNode);

    lastNode = childNode;
  }

  return newNode;
}

function insertIntoGraph(rootNode: ITrieNode, newNode: ITrieNode) {
  if (rootNode.isLeafNode) {
    return;
  }

  for (const childNode of rootNode.childNodes) {
    if (childNode.char === newNode.char) {
      insertIntoGraph(childNode, newNode);
      continue;
    }
  }
}
