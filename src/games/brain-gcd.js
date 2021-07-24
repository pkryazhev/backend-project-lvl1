import * as gameActions from '../index.js';

const calculate = (num1, num2) => {
  let result = 1;
  const count = num1 < num2 ? num1 : num2;
  for (let i = 2; i <= count; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return String(result);
};

const generateGameData = () => {
  const wrightAnswers = [];
  const questionString = [];
  const result = [questionString, wrightAnswers];
  for (let i = 1; i <= gameActions.roundQuantity; i += 1) {
    const number1 = gameActions.generateNumber(100);
    const number2 = gameActions.generateNumber(100);
    wrightAnswers.push(calculate(number1, number2));
    questionString.push(`${number1} ${number2}`);
  }
  return result;
};

const brainGcd = () => {
  gameActions.gameProcess(generateGameData());
};

export default brainGcd;
