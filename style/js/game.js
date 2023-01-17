const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('question-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
      question: "2+2?",
      choice1: "1",
      choice2: "4",
      choice3: "6",
      choice4: "7",
      answer: 2
    },
    {
      question: "4+4?",
      choice1: "8",
      choice2: "2",
      choice3: "4",
      choice4: "12",
      answer: 1
    },
    {
      question: "10-3?",
      choice1: "10",
      choice2: "3",
      choice3: "13",
      choice4: "7",
      answer: 4
    },
    {
        question: "3+8?",
        choice1: "12",
        choice2: "5",
        choice3: "11",
        choice4: "22",
        answer: 3
    },
    {
        question: "15-6?",
        choice1: "9",
        choice2: "12",
        choice3: "3",
        choice4: "8",
        answer: 1
    },


];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('/pages/end.html');
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        

        
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();
