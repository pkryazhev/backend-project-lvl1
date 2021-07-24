import * as gameActions from '../index.js';

const generateGameData = () => {
  const wrightAnswers = [];
  const questionString = [];
  const result = [questionString, wrightAnswers];
  for (let i = 1; i <= gameActions.roundQuantity; i += 1) {
    const number = gameActions.generateNumber(100);
    wrightAnswers.push(number % 2 === 0 ? 'yes' : 'no');
    questionString.push(String(number));
  }
  return result;
};

const brainEven = () => {
  gameActions.gameProcess(generateGameData());
};

export default brainEven;
