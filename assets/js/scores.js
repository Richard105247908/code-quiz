// Retrieve high scores from local storage
function getHighScores() {
    const highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    return highscores;
}

// Display high scores on the high scores page
function displayHighScores() {
    const highscores = getHighScores();
    const highscoresList = document.getElementById('highscores');

    // Clear previous high scores
    highscoresList.innerHTML = '';

    // Add each high score to the list
    highscores.forEach(function(score) {
        const li = document.createElement('li');
        li.textContent = `${score.initials}: ${score.score}`;
        highscoresList.appendChild(li);
    });
}

// Clear high scores from local storage
function clearHighScores() {
    localStorage.removeItem('highscores');
    // After clearing, update the displayed high scores
    displayHighScores();
}

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', clearHighScores);

// When the high scores page loads, display the high scores
window.addEventListener('load', displayHighScores);
