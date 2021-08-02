import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let divider = 1;
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      divider = i;
    }
  }
  return divider === 1;
};

const generateGameData = () => {
  const result = [];
  for (let i = 0; i < roundQuantity; i += 1) {
    const number = generateNumber(2, 100);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    const question = String(number);
    result.push([rightAnswer, question]);
  }
  return result;
};

const brainPrime = () => {
  play(generateGameData(), rule);
};

export default brainPrime;
