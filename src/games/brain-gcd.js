import * as baseActions from '../index.js';

const calculate = (num1, num2) => {
  let result = 1;
  const count = num1 < num2 ? num1 : num2;
  for (let i = 2; i <= count; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const brainGcd = () => {
  const userName = baseActions.helloAndSaveUser();
  let count = 0;
  while (count < baseActions.roundQuantity) {
    const number1 = baseActions.generateNumber();
    const number2 = baseActions.generateNumber();
    const wrightAnswer = calculate(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
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

export default brainGcd;
