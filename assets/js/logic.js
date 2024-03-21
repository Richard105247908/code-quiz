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

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    choiceEl.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.addEventListener('click', handleChoice); // Add event listener here
        choiceEl.appendChild(choiceButton);
    });

}

function startTimer() {
    timeEl.textContent = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft === 0) {
            endQuiz();

        }
    }, 1000);

}

function handleChoice(event) {
    const selectedChoice = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedChoice === currentQuestion.answer) {
        // Display correct feedback (optional)
        feedbackEl.textContent = "Correct!";
    } else {
        // Display incorrect feedback and deduct time
        feedbackEl.textContent = "Incorrect! -10 seconds";
        timeLeft -= 10; // Deduct 10 seconds for incorrect answer
        // Ensure time doesn't go negative
        timeLeft = Math.max(timeLeft, 0);
        // Update the time display
        timeEl.textContent = timeLeft;
    }

    // Move to the next question
    currentQuestionIndex++;
    // Check if all questions have been answered
    if (currentQuestionIndex < questions.length) {
        // If not, display the next question
        displayQuestion();
    } else {
        // If all questions have been answered, end the quiz
        endQuiz();
    }
}
function endQuiz() {
    clearInterval(timerInterval)
    endScreenEl.removeAttribute("class");
    finalScoreEl.textContent = "final score " + timeLeft;

    submitBtn.addEventListener('click', function () {
        var initials = initialsEl.value.trim();
        var scoreData = { initials: initials, score: timeLeft };
        var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
        highscores.push(scoreData);
        localStorage.setItem('highscores', JSON.stringify(highscores));
        // Redirect to the highscores page
        window.location.href = 'highscores.html';

    });

}







