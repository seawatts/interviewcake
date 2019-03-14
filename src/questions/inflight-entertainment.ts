// import * as dotenv from 'dotenv';
// import createLogger from '../services/logger';
// const logger = createLogger('index');

export default function inflightEntertainment(flightLength: number, movieLengths: number[]): boolean {
  if (movieLengths.length === 0) {
    throw new Error();
  }

  const hash = {};
  let totalAmountRemaining = flightLength;

  for (const movieLength of movieLengths) {
    const remainingTime = flightLength - movieLength;

    if (remainingTime in hash) {
      totalAmountRemaining -= movieLength + remainingTime;
    }

    hash[movieLength] = remainingTime;
  }

  return totalAmountRemaining <= 0;
}
