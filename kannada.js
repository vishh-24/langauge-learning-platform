const API_KEY = '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'; // Replace with your OpenAI API Key
const messagesDiv = document.getElementById('messages');

async function sendMessage() {
    const userInput = document.getElementById('user-input').value;

    if (!userInput) return; // Prevent empty messages

    // Add user message to chatbox
    appendMessage(userInput, 'user-message');

    try {
        // Fetch response from OpenAI API
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
            }),
        });

        const data = await response.json();
        const botMessage = data.choices[0].message.content;

        // Add bot response to chatbox
        appendMessage(botMessage, 'bot-message');
    } catch (error) {
        appendMessage('Sorry, something went wrong. Please try again.', 'bot-message');
    }

    // Clear input field
    document.getElementById('user-input').value = '';
}

function appendMessage(message, className) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = className;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
