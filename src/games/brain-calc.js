import generateNumber from '../utils.js';
import play, { roundQuantity } from '../index.js';

const rule = 'What is the result of the expression?';

const generateOperation = () => {
  const operation = ['+', '-', '*'];
  const number = generateNumber(0, operation.length - 1);
  return operation[number];
};

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateGameData = () => {
  const result = [];
  for (let i = 0; i < roundQuantity; i += 1) {
    const num1 = generateNumber(1, 100);
    const num2 = generateNumber(1, 100);
    const operation = generateOperation();
    const rightAnswer = calculate(num1, num2, operation);
    const question = `${num1} ${operation} ${num2}`;
    result.push([String(rightAnswer), question]);
  }
  return result;
};

const brainCalc = () => {
  play(generateGameData(), rule);
};

export default brainCalc;
