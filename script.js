let points = 0;
let progress = 0; // Starting progress percentage

// Function to update points
function addPoints(amount) {
    points += amount;
    document.getElementById("points").textContent = points;
    updateProgress();
}

// Function for checking quiz answers
function checkAnswer(answer) {
    if (answer === 'Delhi') {
        alert('Correct! You earned 10 points!');
        addPoints(10);
    } else {
        alert('Incorrect! Try again.');
    }
}

// Function to update the progress bar
function updateProgress() {
    progress += 10; // Simulating progress increase
    const progressBar = document.querySelector('.progress-filled');
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
        alert("Congratulations! You've completed this module.");
    }
}

// Simulating progress update
setInterval(updateProgress, 3000); // Increase progress by 10% every 3 seconds
