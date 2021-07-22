import * as baseActions from '../index.js';

const isPrime = (number) => {
  console.log(`Question: ${number}`);
  let divider = 1;
  for (let i = 1; i < number; i += 1) {
    if (number % i === 0) {
      divider = i;
    }
  }
  return divider > 1 ? 'no' : 'yes';
};

const brainPrime = () => {
  const userName = baseActions.helloAndSaveUser();
  let count = 0;
  while (count < baseActions.roundQuantity) {
    const wrightAnswer = isPrime(baseActions.generateNumber(100));
    const userAnswer = baseActions.getAnswer();
    if (wrightAnswer === userAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      baseActions.printLose(userAnswer, wrightAnswer, userName);
      return;
    }
  }
  baseActions.printWin(userName);
};

export default brainPrime;
