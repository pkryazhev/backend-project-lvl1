import * as baseActions from '../index.js';

const brainEven = () => {
  const userName = baseActions.helloAndSaveUser();
  let count = 0;
  while (count < baseActions.roundQuantity) {
    const number = baseActions.generateNumber(100);
    const wrightAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
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

export default brainEven;
