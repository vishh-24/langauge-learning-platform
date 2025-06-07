let points = 0;
let progress = 0;
let badge = "None";

// Function to check quiz answer
function checkAnswer(button, correctAnswer) {
    const feedback = document.getElementById('feedback');
    
    if (button.innerText === correctAnswer) {
        feedback.innerText = "Correct! You earned 10 points.";
        points += 10;
    } else {
        feedback.innerText = "Incorrect. Try again.";
    }

    updateProgress();
    updatePoints();
    updateBadge();
}

// Update progress bar
function updateProgress() {
    progress += 10;
    if (progress > 100) progress = 100;
    const progressBar = document.querySelector('.progress-filled');
    progressBar.style.width = `${progress}%`;
}

// Update points display
function updatePoints() {
    document.getElementById('points').innerText = `Points: ${points}`;
}

// Update badge based on points
function updateBadge() {
    if (points >= 50 && badge !== "Beginner") {
        badge = "Beginner";
        document.getElementById('badge').innerText = `Badges Earned: ${badge}`;
    } else if (points >= 100 && badge !== "Intermediate") {
        badge = "Intermediate";
        document.getElementById('badge').innerText = `Badges Earned: ${badge}`;
    } else if (points >= 150 && badge !== "Advanced") {
        badge = "Advanced";
        document.getElementById('badge').innerText = `Badges Earned: ${badge}`;
    }
}
