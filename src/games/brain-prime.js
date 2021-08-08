import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const result = [];
  for (let i = 0; i < roundQuantity; i += 1) {
    const number = generateNumber(2, 100);
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    result.push([rightAnswer, number]);
  }
  return result;
};

const brainPrime = () => {
  play(generateGameData(), rule);
};

export default brainPrime;
