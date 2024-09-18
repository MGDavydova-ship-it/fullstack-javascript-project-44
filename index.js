import readlineSync from 'readline-sync';

const playEvenGame = () => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}`);
    console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
    let n = 0;
    while (n < 3) {
        const randomNumber = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
        console.log(`Question: ${randomNumber}`);
        const answer = readlineSync.question('Your answer:');
        const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
        if (answer !== correctAnswer) {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`
            );
            n = 0;
        } else {
            console.log("Correct!");
            n++;
        }
    }
    console.log(`Congratulations, ${name}!`)
}

export default playEvenGame