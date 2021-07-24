import * as gameActions from '../index.js';

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
  const wrightAnswers = [];
  const questionString = [];
  const result = [questionString, wrightAnswers];
  for (let i = 1; i <= gameActions.roundQuantity; i += 1) {
    const number = gameActions.generateNumber(100);
    wrightAnswers.push(isPrime(number));
    questionString.push(String(number));
  }
  return result;
};

const brainPrime = () => {
  gameActions.gameProcess(generateGameData());
};

export default brainPrime;
