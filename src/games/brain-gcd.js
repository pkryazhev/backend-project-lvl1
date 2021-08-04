import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const calculate = (num1, num2) => {
  let result = 1;
  const count = num1 < num2 ? num1 : num2;
  for (let i = 2; i <= count; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const generateGameData = () => {
  const result = [];
  for (let i = 0; i < roundQuantity; i += 1) {
    const num1 = generateNumber(1, 100);
    const num2 = generateNumber(1, 100);
    const rightAnswer = calculate(num1, num2);
    const question = `${num1} ${num2}`;
    result.push([rightAnswer, question]);
  }
  return result;
};

const brainGcd = () => {
  play(generateGameData(), rule);
};

export default brainGcd;
