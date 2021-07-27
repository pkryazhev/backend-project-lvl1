import generateNumber from '../utils.js';
import gameProcess, { roundQuantity } from '../index.js';

const generateGameData = () => {
  const rightAnswers = [];
  const questions = [];
  const result = [questions, rightAnswers];
  for (let i = 0; i < roundQuantity; i += 1) {
    const firstNumber = generateNumber(1, 15);
    const key = generateNumber(2, 10);
    const position = generateNumber(2, 9);
    let resultString = '';
    for (let j = 0; j <= 9; j += 1) {
      const number = firstNumber + j * key;
      if (j === position) {
        resultString += '.. ';
      } else resultString += `${number} `;
    }
    questions.push(resultString);
    rightAnswers.push(String(firstNumber + key * position));
  }
  return result;
};

const brainProgression = () => {
  gameProcess(generateGameData());
};

export default brainProgression;
