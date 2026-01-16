const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Tixt Marksteve Lala"],
        correct: 1
    },

    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheet", "CasCasSon", "Cascading Style Sheesh"],
        correct: 1
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<css>", "<style>", "<link>"],
        correct: 2
    }
]

let startBtn = document.getElementById("startbtn");
let startScreen = document.getElementById("start-screen");
let quizScreen = document.getElementById("quiz-screen");
let questionText = document.getElementById("question-text");
let optionContainer = document.getElementById("option-container");
let resultScreen = document.getElementById("result-screen");
let finalScore = document.getElementById("final-score");
let restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0
let remainingTime = 15
let timerInterval = null

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
})