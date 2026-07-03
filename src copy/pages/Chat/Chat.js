import React, { useEffect, useRef, useState } from 'react';
import './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const GEMINI_API_KEY = "Your_api_key"; // Replace with your actual API key

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello 👋 \nHow can I assist you today?", isBot: true }
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatboxRef = useRef(null);

  const handleChat = () => {
    if (!userMessage.trim()) return;

    const newMessage = { text: userMessage, isBot: false };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserMessage("");

    
    setMessages((prevMessages) => [...prevMessages, { text: "Typing...", isBot: true }]);

    
    generateResponse(userMessage);
  };

  const generateResponse = async (message) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }]
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        const botMessage = data.candidates[0].content.parts[0].text;
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // Remove "Typing..." message
          { text: botMessage, isBot: true },
        ]);
      } else {
        throw new Error('Unexpected response structure from Gemini API');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { text: `Error: ${error.message}`, isBot: true },
      ]);
    } finally {
      if (chatboxRef.current) {
        chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      }
    }
  };

  const handleInputChange = (e) => setUserMessage(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
    }
  };

  const toggleChatbot = () => {
    setIsChatOpen((prev) => !prev);
  };

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  }, [messages]);

  return (
    <div className="aichat">
      <div className="container">
        <div className="hello">
          <h1 className='talk'>Talk to me</h1>
          <p className='infor'>I am your AI assistant where you can express your feelings</p>
          <p className='infor'>And I will try to give as much as possible suggestions to your problems</p>
          <p style={{ color: "red" }} className='infor'>Click on the chat icon to start a conversation</p>
        </div>

        <button className="chatbot-toggler" onClick={toggleChatbot}>
          <FontAwesomeIcon icon={faMessage} />
        </button>

        {isChatOpen && (
          <div className="catbot-container">
            <div className="catbot-header">
              <h2>ChatBot</h2>
            </div>
            <div className="catbot-output" ref={chatboxRef}>
              <div className="messages">
                {messages.map((message, index) => (
                  <div key={index} className={message.isBot ? "bot-message" : "user-message"}>
                    {message.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="catbot-input">
              <input
                type="text"
                placeholder="Type your message"
                value={userMessage}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleChat}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
