import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

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
  const result = [];
  for (let i = 0; i < roundQuantity; i += 1) {
    const number1 = generateNumber(1, 100);
    const number2 = generateNumber(1, 100);
    const operation = generateOperation();
    const rightAnswer = calculate(number1, number2, operation);
    const question = `${number1} ${operation} ${number2}`;
    result.push([rightAnswer, question]);
  }
  return result;
};

const rule = 'What is the result of the expression?';

const brainCalc = () => {
  play(generateGameData(), rule);
};

export default brainCalc;
