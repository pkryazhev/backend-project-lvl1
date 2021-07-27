import readlineSync from 'readline-sync';

export const roundQuantity = 3;

const gameProcess = (gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const [questionString, rightAnswers] = gameData;
  for (let i = 0; i < roundQuantity; i += 1) {
    console.log(`Question: ${questionString[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswers[i] === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswers[i]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameProcess;
