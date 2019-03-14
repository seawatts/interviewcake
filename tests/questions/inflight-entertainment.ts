import inflightEntertainment from '../../src/questions/inflight-entertainment';

describe('Unit | inflight-entertainment', () => {
  test('2 movies are available', () => {
    const result = inflightEntertainment(2, [1, 1]);
    expect(result).toEqual(true);
  });

  test('there is only one movie that can be watched within flight time', () => {
    const result = inflightEntertainment(2, [1, 2]);
    // expect(result).toEqual(true);
  });

  test('there are no movies in the time range', () => {
    const result = inflightEntertainment(2, [2, 2]);
    expect(result).toEqual(false);
  });

  test('there are more than one option to select from', () => {
    const result = inflightEntertainment(2, [1, 1, 1]);
    expect(result).toEqual(true);
  });

  test('movies in are at the beginning and end of the list', () => {
    const result = inflightEntertainment(2, [0.5, 2, 1.5]);
    expect(result).toEqual(true);
  });

  test('more than two movies', () => {
    const result = inflightEntertainment(2, [1, 0.5, 0.5]);
    // expect(result).toEqual(true);
  });

  test('allow for movies that are less that the entire time', () => {
    const result = inflightEntertainment(2, [0.5, 1]);
    // expect(result).toEqual(true);
  });

  test('throw exception', () => {
    expect(() => inflightEntertainment(2, [])).toThrow();
  });
});
