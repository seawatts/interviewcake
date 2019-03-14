import hashingAndHashTables from '../../src/questions/hashing-and-hash-tables';

describe('Unit | hashing-and-hash-tables', () => {
  test('happy path', () => {
    const unsortedScores = [37, 89, 41, 65, 91, 53];
    const highestPossibleScore = 100;
    const result = hashingAndHashTables(unsortedScores, highestPossibleScore);

    expect(result).toEqual([91, 89, 65, 53, 41, 37]);
  });

  test('same scores', () => {
    const unsortedScores = [10, 10, 10, 10];
    const highestPossibleScore = 100;
    const result = hashingAndHashTables(unsortedScores, highestPossibleScore);

    expect(result).toEqual([10, 10, 10, 10]);
  });
});
