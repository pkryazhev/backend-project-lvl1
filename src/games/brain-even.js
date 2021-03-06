import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateGameData = () => {
  const result = [];
  for (let i = 0; i < roundQuantity; i += 1) {
    const question = generateNumber(1, 100);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    result.push([rightAnswer, question]);
  }
  return result;
};

const brainEven = () => {
  play(generateGameData(), rule);
};

export default brainEven;
