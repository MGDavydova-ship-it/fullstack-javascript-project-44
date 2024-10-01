import readlineSync from 'readline-sync';

const playGame = (game) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question('May I have your name?');
    console.log(`Hello, ${name}`);
    let gameRule;
    if (game === "isEven") {
        gameRule = `Answer "yes" if the number is even, otherwise answer "no".`
    }
    else if (game === "calculator") {
        gameRule = `What is the result of the expression?`
    }
    console.log(gameRule);
    let n = 0;
    while (n < 3) {
        let answerObj;
        if (game === "isEven") {
          answerObj = playEven()
        }
        else if (game === "calculator") {
          answerObj = playCalc()
        }
        if (answerObj.answer != answerObj.correctAnswer) {
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

const playCalc = () => {
    const randomNumber1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const randomNumber2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const operation = ["+", "-", "*"][Math.floor(Math.random()*3)];

    console.log(`Question: ${randomNumber1}${operation}${randomNumber2}`);
    const answerObj = {}
    answerObj.answer = readlineSync.question('Your answer:');
    let correctAnswer;
    if (operation === "+") {
        correctAnswer = randomNumber1 + randomNumber2
    }
    else if (operation === "-") {
        correctAnswer = randomNumber1 - randomNumber2
    }
    else if (operation === "*") {
        correctAnswer = randomNumber1 * randomNumber2
    }
    answerObj.correctAnswer = correctAnswer;
    return answerObj
}

export default playGame