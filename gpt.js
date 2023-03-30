// Get the chat container element
const chatContainer = document.querySelector('.chat-container');

// Create a function to add a new message to the chat body
function addMessageToChat(message, sender) {
  // Create a new message element
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', `${sender}-message`);

  // Create a new paragraph element to hold the message text
  const messageText = document.createElement('p');
  messageText.textContent = message;

  // Add the message text to the message element
  messageElement.appendChild(messageText);

  // Add the message element to the chat body
  const chatBody = chatContainer.querySelector('.chat-body');
  chatBody.appendChild(messageElement);

  // Scroll to the bottom of the chat body
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Create a function to handle user input
function handleUserInput() {
  const userInput = document.querySelector('.chat-footer input[type="text"]');
  const message = userInput.value.trim();

  // Check if the user input is not empty
  if (message !== '') {
    // Add the user message to the chat body
    addMessageToChat(message, 'user');

    // Clear the user input field
    userInput.value = '';

    // Send the user message to the chatbot
    sendUserMessageToChatbot(message);
  }
}

// Create a function to send the user message to the chatbot
function sendUserMessageToChatbot(message) {
  // Simulate a delay before receiving the chatbot response
  setTimeout(() => {
    // Generate a random response from the chatbot
    const responses = ['I am not sure what you mean.', 'Could you please rephrase your question?', 'That is a great question!', 'I will need to look into that.'];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];

    // Add the chatbot response to the chat body
    addMessageToChat(response, 'chatbot');
  }, 1000);
}

// Add an event listener to the send button to handle user input
const sendButton = document.querySelector('.chat-footer button');
sendButton.addEventListener('click', handleUserInput);

// Add an event listener to the user input field to handle user input on Enter key press
const userInput = document.querySelector('.chat-footer input[type="text"]');
userInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});
