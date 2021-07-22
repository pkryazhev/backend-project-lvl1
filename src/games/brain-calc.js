import * as baseActions from '../index.js';

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
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const brainCalc = () => {
  const userName = baseActions.helloAndSaveUser();
  let count = 0;
  while (count < baseActions.roundQuantity) {
    const number1 = baseActions.generateNumber(100);
    const number2 = baseActions.generateNumber(100);
    const operation = generateOperation();
    const wrightAnswer = calculate(number1, number2, operation);
    console.log(`Question: ${number1} ${operation} ${number2}`);
    const userAnswer = baseActions.getAnswer();
    if (wrightAnswer === +userAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      baseActions.printLose(userAnswer, wrightAnswer, userName);
      return;
    }
  }
  baseActions.printWin(userName);
};

export default brainCalc;
