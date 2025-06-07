// telugu.js

// Function to start the quiz
function startQuiz() {
    // You can change this with a more complex quiz system
    const question = "What is the Telugu word for 'Hello'?";
    const options = ['హలో (Halo)', 'నమస్తే (Namaste)', 'வணக்கம் (Vanakkam)', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ (Sat Sri Akal)'];
    const correctAnswer = 'హలో (Halo)';
    
    const userAnswer = prompt(`${question}\n${options.join("\n")}`);
    
    if (userAnswer === correctAnswer) {
        alert("Correct! Well done!");
    } else {
        alert(`Incorrect! The correct answer is: ${correctAnswer}`);
    }
}

// Attach event listener to start quiz button
document.getElementById("start-quiz").addEventListener("click", startQuiz);

// You can add more interactive functionality below
