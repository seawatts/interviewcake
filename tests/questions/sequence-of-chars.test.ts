import sequenceOfChars from '../../src/questions/sequence-of-chars';

describe('Unit | sequence-of-chars', () => {
  test('returns null', () => {
    const result = sequenceOfChars(['a', 'a']);
    // expect(result).toEqual(null);
  });

  test('easy', () => {
    const result = sequenceOfChars(['a', 'a', 'aa']);
    // expect(result).toEqual('aa');
  });

  test('all accounted for ', () => {
    const result = sequenceOfChars(['apple', 'pear', 'applepear']);
    // expect(result).toEqual('applepear');
  });

  test('throw exception', () => {
    expect(() => sequenceOfChars([])).toThrow();
  });
});
