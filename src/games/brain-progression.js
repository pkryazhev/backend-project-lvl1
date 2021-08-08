import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

const rule = 'What number is missing in the progression?';

const createProgression = (first, key, hiddenIndex) => {
  const result = [];
  for (let j = 0; j <= 9; j += 1) {
    const number = first + j * key;
    if (j === hiddenIndex) {
      result.push('..');
    } else result.push(number);
  }
  const rightAnswer = String(first + key * hiddenIndex);
  return [rightAnswer, result.join(' ')];
};

const generateGameData = () => {
  const result = [];
  for (let i = 0; i < roundQuantity; i += 1) {
    const first = generateNumber(1, 15);
    const key = generateNumber(2, 10);
    const hiddenIndex = generateNumber(2, 9);
    result.push(createProgression(first, key, hiddenIndex));
  }
  return result;
};

const brainProgression = () => {
  play(generateGameData(), rule);
};

export default brainProgression;
