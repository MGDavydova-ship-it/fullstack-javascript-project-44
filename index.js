import readlineSync from 'readline-sync';

const playGame = (game) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}`);
    let gameRule;
    if (game === "isEven") {
        gameRule = `Answer "yes" if the number is even, otherwise answer "no".`
    }
    console.log(gameRule);
    let n = 0;
    while (n < 3) {
        let answerObj;
        if (game === "isEven") {
          answerObj = playEven()
        }
        if (answerObj.answer !== answerObj.correctAnswer) {
            console.log(`'${answerObj.answer}' is wrong answer ;(. Correct answer was '${answerObj.correctAnswer}'.
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


const playEven = () => {
    const randomNumber = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
    console.log(`Question: ${randomNumber}`);
    const answerObj = {}
    answerObj.answer = readlineSync.question('Your answer:');
    answerObj.correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    return answerObj
}

const playEvenGame = () => {
    playGame("isEven")
}

export default playEvenGame