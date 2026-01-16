const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Tixt Marksteve Lala"],
        correct: 1
    },

    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheet", "CasCasSon", "Cascading Style Sheesh"],
        correct: 0
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
let questionNumber = document.getElementById("question-number");
let timeLeft = document.getElementById("time-left");
let timeRight = document.getElementById("time-right");

let currentQuestionIndex = 0;
let score = 0
let remainingTime = 15
let timerInterval = null

startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    score = 0

    loadQuestion()
})


function loadQuestion() {
    console.log(questions)
    clearInterval(timerInterval)

    remainingTime = 15

    const currentQuestionData = questions[currentQuestionIndex];

    timeLeft.innerText = `Time Left: ${remainingTime}`

    timerInterval = setInterval(() => {
        remainingTime--
        timeLeft.innerText = `Time Left: ${remainingTime}`;

        if(remainingTime === 0){
            clearInterval(timerInterval)
            checkAnswer(-1)
        }
    }, 1000)

    questionText.innerText = currentQuestionData.question;

    questionNumber.innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    optionContainer.innerHTML = ""

    currentQuestionData.options.forEach((option, index) => {
        let questionDiv = document.createElement("button");

        questionDiv.classList.add("quizBox");

        questionDiv.innerText = option
        optionContainer.appendChild(questionDiv);

        console.log(option)

        questionDiv.addEventListener("click", (event) => {
            checkAnswer(index)
        })

    })


}

function checkAnswer(index) {

    const correctIndex = questions[currentQuestionIndex].correct
    if(index === correctIndex){
        score++
    }

    currentQuestionIndex++

    if(currentQuestionIndex < questions.length){
        loadQuestion()
    }

    if(currentQuestionIndex >= questions.length){
        showResult()
    }
}

function showResult(){
    clearInterval(timerInterval)

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    finalScore.innerText = `Score: ${Math.round(score / questions.length * 100)}%`;

}

restartBtn.addEventListener("click", (event) => {
    clearInterval(timerInterval)

    currentQuestionIndex = 0

    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
})
