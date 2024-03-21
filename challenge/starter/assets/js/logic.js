const startBtn = document.getElementById("start");
const timeEl = document.getElementById("time");
const startScreenEl = document.getElementById("start-screen");
const questionEl = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const choiceEl = document.getElementById("choices");
const endScreenEl = document.getElementById("end-screen");
const initialsEl = document.getElementById("initials");
const submitBtn = document.getElementById("submit");
const feedbackEl = document.getElementById("feedback");
const finalScoreEl = document.getElementById('final-score');

// Define global variables for quiz state
let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;

startBtn.addEventListener('click', startQuiz);


function startQuiz() {
    startScreenEl.setAttribute('class', 'hide');
    questionEl.removeAttribute("class");
    displayQuestion();
    startTimer();
}







