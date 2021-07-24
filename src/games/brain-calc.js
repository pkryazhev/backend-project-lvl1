import * as gameActions from '../index.js';

const generateOperation = () => {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return '+';
  }
};

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      return null;
  }
};

const generateGameData = () => {
  const wrightAnswers = [];
  const questionString = [];
  const result = [questionString, wrightAnswers];
  for (let i = 1; i <= gameActions.roundQuantity; i += 1) {
    const number1 = gameActions.generateNumber(100);
    const number2 = gameActions.generateNumber(100);
    const operation = generateOperation();
    wrightAnswers.push(calculate(number1, number2, operation));
    questionString.push(`${number1} ${operation} ${number2}`);
  }
  return result;
};

const brainCalc = () => {
  gameActions.gameProcess(generateGameData());
};

export default brainCalc;
