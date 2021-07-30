import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

const rule = 'What is the result of the expression?';

const generateOperation = () => {
  const number = generateNumber(0, 2);
  const operation = ['+', '-', '*'];
  return operation[number];
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

const brainCalc = () => {
  play(generateGameData(), rule);
};

export default brainCalc;
