const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What languages is this written in?",
        answers: [
            { text: "C+, Phython", correct: false },
            { text: "HTML5,CSS,Javascript", correct: true },
            { text: "SQL, CSS, Ruby", correct: false },
            { text: "English", correct: false }
        ]
    },
    {
        question: "Yes?",
        answers: [
            { text: "No", correct: false },
            { text: "huh", correct: true },
            { text: "Elephant", correct: false },
            { text: "yurp", correct: false }
        ]
    },
    {
        question: "10 + 10",
        answers: [
            { text: "2", correct: false },
            { text: "20", correct: true },
            { text: "21", correct: false },
            { text: "19", correct: false }
        ]
    },
    {
        question: "Quiz app?",
        answers: [
            { text: "App", correct: false },
            { text: "Quiz app", correct: true },
            { text: "Quiz", correct: false },
            { text: "?", correct: false }
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    answerButtonsElement.innerHTML = ''; // Clear previous answers

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    nextButton.addEventListener('click', startQuiz);
}

startQuiz();