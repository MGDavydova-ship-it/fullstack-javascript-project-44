import readlineSync from "readline-sync";

const playGame = (game) => {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name?");
    console.log(`Hello, ${name}`);
    let gameRule;
    if (game === "isEven") {
        gameRule = `Answer "yes" if the number is even, otherwise answer "no".`;
    } else if (game === "calculator") {
        gameRule = `What is the result of the expression?`;
    } else if (game === "gcd") {
        gameRule = `Find the greatest common divisor of given numbers.`;
    } else if (game === "progression") {
        gameRule = `What number is missing in the progression?`;
    }
    console.log(gameRule);
    let n = 0;
    while (n < 3) {
        let answerObj;
        if (game === "isEven") {
            answerObj = playEven();
        } else if (game === "calculator") {
            answerObj = playCalc();
        } else if (game === "gcd") {
            answerObj = playGcd();
        } else if (game === "progression") {
            answerObj = playProgression();
        }
        if (answerObj.answer != answerObj.correctAnswer) {
            console.log(`'${answerObj.answer}' is wrong answer ;(. Correct answer was '${answerObj.correctAnswer}'.
Let's try again, ${name}!`);
            return;
        } else {
            console.log("Correct!");
            n++;
        }
    }
    console.log(`Congratulations, ${name}!`);
};

const playEven = () => {
    const randomNumber = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
    console.log(`Question: ${randomNumber}`);
    const answerObj = {};
    answerObj.answer = readlineSync.question("Your answer:");
    answerObj.correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
    return answerObj;
};

const playCalc = () => {
    const randomNumber1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const randomNumber2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const operation = ["+", "-", "*"][Math.floor(Math.random() * 3)];

    console.log(`Question: ${randomNumber1}${operation}${randomNumber2}`);
    const answerObj = {};
    answerObj.answer = readlineSync.question("Your answer:");
    let correctAnswer;
    if (operation === "+") {
        correctAnswer = randomNumber1 + randomNumber2;
    } else if (operation === "-") {
        correctAnswer = randomNumber1 - randomNumber2;
    } else if (operation === "*") {
        correctAnswer = randomNumber1 * randomNumber2;
    }
    answerObj.correctAnswer = correctAnswer;
    return answerObj;
};

const playGcd = () => {
    const randomNumber1 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    const randomNumber2 = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answerObj = {};
    answerObj.answer = readlineSync.question("Your answer:");
    answerObj.correctAnswer = gcd(randomNumber1, randomNumber2);
    return answerObj;
};

const gcd = (a, b) => {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

const playProgression = () => {
    const firstNumber = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    const difference = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    const progressionLength = [5, 6, 7, 8, 9, 10][
        Math.floor(Math.random() * 6)
    ];
    const nValues = [];
    for (let i = 1; i <= progressionLength; i++) {
        nValues.push(i);
    }
    const n = nValues[Math.floor(Math.random() * 6)];
    let progressionString = "";
    let i = 1;
    while (i <= progressionLength) {
        if (i == n) {
            progressionString += ".. ";
        } else {
            progressionString += `${findNthNumber(
                firstNumber,
                difference,
                i
            )} `;
        }
        i++;
    }
    progressionString = progressionString.substring(
        0,
        progressionString.length - 1
    );

    console.log(`Question: ${progressionString}`);
    const answerObj = {};
    answerObj.answer = readlineSync.question("Your answer:");
    answerObj.correctAnswer = findNthNumber(firstNumber, difference, n);
    return answerObj;
};

const findNthNumber = (firstNumber, difference, n) => {
    return firstNumber + (n - 1) * difference;
}

export default playGame;
