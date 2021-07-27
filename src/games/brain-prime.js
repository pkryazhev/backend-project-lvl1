import generateNumber from '../utils.js';
import gameProcess, { roundQuantity } from '../index.js';

const isPrime = (number) => {
  let divider = 1;
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      divider = i;
    }
  }
  return divider > 1 ? 'no' : 'yes';
};

const generateGameData = () => {
  const rightAnswers = [];
  const questions = [];
  const result = [questions, rightAnswers];
  for (let i = 0; i < roundQuantity; i += 1) {
    const number = generateNumber(2, 100);
    rightAnswers.push(isPrime(number));
    questions.push(String(number));
  }
  return result;
};

const brainPrime = () => {
  gameProcess(generateGameData());
};

export default brainPrime;
