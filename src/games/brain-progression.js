import * as baseActions from '../index.js';

const generateProgression = () => {
  const firstNumber = baseActions.generateNumber(15);
  const key = baseActions.generateNumber(10);
  const position = baseActions.generateNumber(10);
  let resultString = '';
  for (let i = 0; i <= 9; i += 1) {
    const number = firstNumber + i * key;
    if (i === position) {
      resultString += '.. ';
    } else resultString += `${number} `;
  }
  console.log(`Question: ${resultString}`);
  return firstNumber + key * position;
};

const brainProgression = () => {
  const userName = baseActions.helloAndSaveUser();
  let count = 0;
  while (count < baseActions.roundQuantity) {
    const wrightAnswer = generateProgression();
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

export default brainProgression;
