import findUniqueIntAmongDuplicates from '../../src/questions/find-unique-int-among-duplicates';

describe('Unit | find-unique-int-among-duplicates', () => {
  test('one missing', () => {
    const result = findUniqueIntAmongDuplicates([1, 1, 2]);
    expect(result).toEqual([2]);
  });

  test('multiple missing', () => {
    const result = findUniqueIntAmongDuplicates([1, 1, 2, 3]);
    expect(result).toEqual([2, 3]);
  });

  test('all accounted for ', () => {
    const result = findUniqueIntAmongDuplicates([1, 1, 2, 2, 3, 3, 4, 4]);
    expect(result).toEqual([]);
  });

  test('throw exception', () => {
    expect(() => findUniqueIntAmongDuplicates([])).toThrow();
  });
});
