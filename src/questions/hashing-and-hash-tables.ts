export default function hashingAndHashTables(unsortedScores: number[], highestPossibleScore: number): number[] {
  if (unsortedScores.length === 0) {
    throw new Error();
  }

  const scoreCountArray: number[] = new Array(highestPossibleScore).fill(0);

  for (const score of unsortedScores) {
    scoreCountArray[score]++;
  }

  const result: number[] = new Array();

  scoreCountArray.forEach((scoreCount, index) => {
    if (!scoreCount || scoreCount === 0) {
      return;
    }

    for (let i = 0; i < scoreCount; i++) {
      result.unshift(index);
    }
  });

  return result;
}
