document.addEventListener('DOMContentLoaded', () => {
  const chatWindow = document.getElementById('chat-window');
  const chatForm = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');

  const API_URL = 'https://chat-backend-anku.onrender.com/api/chat'; 
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const messageText = userInput.value.trim();

    if (messageText === '')
      return;

    addMessage(messageText, 'user');
    userInput.value = '';

    console.log('Sending message to API:', messageText);

    try {
      const response = await fetch(API_URL, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({message : messageText}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Received response from API:', data);

      addMessage(data.response, 'bot');
    } catch (error) {
      console.error('Error:', error);
      addMessage('Error communicating with AI.', 'bot');
    }
  });

  function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
});