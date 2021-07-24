import readlineSync from 'readline-sync';

const roundQuantity = 3;

const getAnswer = () => readlineSync.question('Your answer: ');

const helloAndSaveUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return userName;
};

const printWin = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

const printLose = (userAnswer, wrightAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${wrightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const generateNumber = (max) => Math.floor(Math.random() * max);

const printQuestion = (str) => {
  console.log(`Question: ${str}`);
};

const printCorrect = () => {
  console.log('Correct!');
};

const gameProcess = (gameData) => {
  const userName = helloAndSaveUser();
  const [questionString, wrightAnswers] = gameData;
  for (let i = 0; i < roundQuantity; i += 1) {
    printQuestion(questionString[i]);
    const userAnswer = getAnswer();
    if (wrightAnswers[i] === userAnswer) {
      printCorrect();
    } else {
      printLose(userAnswer, wrightAnswers[i], userName);
      return;
    }
  }
  printWin(userName);
};

export {
  getAnswer, helloAndSaveUser, printWin, printLose, roundQuantity, generateNumber,
  printQuestion, printCorrect, gameProcess,
};
