import * as gameActions from '../index.js';

const generateGameData = () => {
  const wrightAnswers = [];
  const questionString = [];
  const result = [questionString, wrightAnswers];
  for (let i = 1; i <= gameActions.roundQuantity; i += 1) {
    const firstNumber = gameActions.generateNumber(15);
    const key = gameActions.generateNumber(10);
    const position = gameActions.generateNumber(10);
    let resultString = '';
    for (let j = 0; j <= 9; j += 1) {
      const number = firstNumber + j * key;
      if (j === position) {
        resultString += '.. ';
      } else resultString += `${number} `;
    }
    questionString.push(resultString);
    wrightAnswers.push(String(firstNumber + key * position));
  }
  return result;
};

const brainProgression = () => {
  gameActions.gameProcess(generateGameData());
};

export default brainProgression;
