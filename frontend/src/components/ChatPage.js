import '../styles/ChatPage.css';

import React, {useEffect, useRef, useState} from 'react';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
    }
  }, [ messages ]);

  const handleInputChange = (e) => { setUserInput(e.target.value); };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== '') {
      const newMessages = [...messages, {text : userInput, sender : 'user'} ];
      setMessages(newMessages);

      fetch('/api/chat', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json',
          // Include JWT token if authentication is implemented
          // 'Authorization': `Bearer ${token}`,
        },
        body : JSON.stringify({message : userInput}),
      })
          .then((res) => res.json())
          .then((data) => {
            setMessages(
                [...newMessages, {text : data.response, sender : 'bot'} ]);
          })
          .catch((error) => {
            console.error('Error:', error);
            setMessages([...newMessages,
              {text : 'Error communicating with AI.', sender : 'bot'}]);
          });

      setUserInput('');
    }
  };

  return (
    <div className="chat-container"> 
      <div className="chat-header">
        <h2>Chat with AI Bot</h2>
      </div>
      <div className="chat-window" ref={chatContainerRef}> 
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-area"> 
        <input type="text" value={userInput} onChange={handleInputChange} placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatPage;