// Get the input field and button from the HTML
const inputField = document.querySelector("input[type='text']");
const sendButton = document.querySelector("button");

// Add an event listener to the send button
sendButton.addEventListener("click", sendMessage);

// Define a function to send messages
function sendMessage() {
  // Get the value of the input field
  const message = inputField.value;

  // Create a new chat message element
  const chatMessage = document.createElement("div");
  chatMessage.classList.add("chat-message", "user-message");
  chatMessage.innerHTML = `<p>${message}</p>`;

  // Add the chat message element to the chat body
  const chatBody = document.querySelector(".chat-body");
  chatBody.appendChild(chatMessage);

  // Clear the input field
  inputField.value = "";

  // Check if the message is a pre-written question
  if (message === "What is your name?") {
    // Create a pre-written answer
    const answer = "My name is ChatGPT. How can I help you today?";

    // Create a new chat message element for the answer
    const chatbotMessage = document.createElement("div");
    chatbotMessage.classList.add("chat-message", "chatbot-message");
    chatbotMessage.innerHTML = `<p>${answer}</p>`;

    // Add the chatbot message element to the chat body after a short delay
    setTimeout(() => {
      chatBody.appendChild(chatbotMessage);
    }, 1000);
  } else if (message === "What is your favorite color?") {
    // Create a pre-written answer
    const answer = "I'm sorry, as an AI language model, I don't have a favorite color.";

    // Create a new chat message element for the answer
    const chatbotMessage = document.createElement("div");
    chatbotMessage.classList.add("chat-message", "chatbot-message");
    chatbotMessage.innerHTML = `<p>${answer}</p>`;

    // Add the chatbot message element to the chat body after a short delay
    setTimeout(() => {
      chatBody.appendChild(chatbotMessage);
    }, 1000);
  } else {
    // Create a default response
    const answer = "I'm sorry, I don't understand. Can you please rephrase or ask another question?";

    // Create a new chat message element for the default response
    const chatbotMessage = document.createElement("div");
    chatbotMessage.classList.add("chat-message", "chatbot-message");
    chatbotMessage.innerHTML = `<p>${answer}</p>`;

    // Add the chatbot message element to the chat body after a short delay
    setTimeout(() => {
      chatBody.appendChild(chatbotMessage);
    }, 1000);
  }
}

    // get the chat body element
    const chatBody = document.querySelector('.chat-body');
    
    // auto-scroll to the bottom of the chat body
    chatBody.scrollTop = chatBody.scrollHeight;
    
    // add an event listener to the chat body to auto-scroll when it is updated
    chatBody.addEventListener('DOMNodeInserted', event => {
    const { currentTarget: target } = event;
    target.scrollTop = target.scrollHeight;
    });
