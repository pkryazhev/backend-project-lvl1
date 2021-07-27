import generateNumber from '../utils.js';
import gameProcess, { roundQuantity } from '../index.js';

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
  const rightAnswers = [];
  const questions = [];
  const result = [questions, rightAnswers];
  for (let i = 0; i < roundQuantity; i += 1) {
    const number1 = generateNumber(1, 100);
    const number2 = generateNumber(1, 100);
    const operation = generateOperation();
    rightAnswers.push(calculate(number1, number2, operation));
    questions.push(`${number1} ${operation} ${number2}`);
  }
  return result;
};

const brainCalc = () => {
  gameProcess(generateGameData());
};

export default brainCalc;
