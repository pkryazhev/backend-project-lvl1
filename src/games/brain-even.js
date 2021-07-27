import generateNumber from '../utils.js';
import gameProcess, { roundQuantity } from '../index.js';

const generateGameData = () => {
  const rightAnswers = [];
  const questions = [];
  const result = [questions, rightAnswers];
  for (let i = 0; i < roundQuantity; i += 1) {
    const number = generateNumber(1, 100);
    rightAnswers.push(number % 2 === 0 ? 'yes' : 'no');
    questions.push(String(number));
  }
  return result;
};

const brainEven = () => {
  gameProcess(generateGameData());
};

export default brainEven;
