import readlineSync from 'readline-sync';

const getAnswer = () => readlineSync.question('Your answer: ');

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const number = Math.floor(Math.random() * 100);
    const wrightAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = getAnswer();
    if (wrightAnswer === userAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${wrightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
