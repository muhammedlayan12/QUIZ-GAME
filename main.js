const inquirer = require('inquirer');

const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Jupiter",
    },
    {
        question: "Who wrote 'To be, or not to be'?",
        choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
        answer: "William Shakespeare",
    },
];

async function quiz() {
    console.log("Welcome to the Quiz Game!");

    let score = 0;

    for (const question of questions) {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: question.question,
                choices: question.choices,
            }
        ]);

        if (answer.userAnswer === question.answer) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Wrong! The correct answer is ${question.answer}.`);
        }
    }

    console.log(`Your final score is ${score}/${questions.length}.`);
}

quiz();
