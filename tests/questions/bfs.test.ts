import bfs from '../../src/questions/bfs';

describe('Unit | bfs', () => {
  test('valid hard', () => {
    const network = {
      Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
      Amelia: ['Jayden', 'Adam', 'Miguel'],
      Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
      Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
      Min: ['William', 'Jayden', 'Omar'],
      Noam: ['Nathan', 'Jayden', 'William'],
      Omar: ['Ren', 'Min', 'Scott'],
      Ren: ['Jayden', 'Omar'],
      William: ['Min', 'Noam']
    };

    const result = bfs(network, 'Jayden', 'Adam');
    expect(result).toEqual(['Jayden', 'Amelia', 'Adam']);
  });

  test('valid easy 0 hops', () => {
    const network = {
      Jayden: ['Adam'],
    };

    const result = bfs(network, 'Jayden', 'Adam');
    expect(result).toEqual(['Jayden', 'Adam']);
  });

  test('valid easy 1 hop', () => {
    const network = {
      Jayden: ['Noam'],
      Noam: ['Adam'],
    };

    const result = bfs(network, 'Jayden', 'Adam');
    expect(result).toEqual(['Jayden', 'Noam', 'Adam']);
  });
});
