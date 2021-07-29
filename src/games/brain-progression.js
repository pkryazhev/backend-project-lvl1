import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

const generateGameData = () => {
  const result = [];
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
    const rightAnswer = resultString;
    const question = String(firstNumber + key * position);
    result.push([rightAnswer, question]);
  }
  return result;
};

const rule = 'What number is missing in the progression?';

const brainProgression = () => {
  play(generateGameData(), rule);
};

export default brainProgression;
