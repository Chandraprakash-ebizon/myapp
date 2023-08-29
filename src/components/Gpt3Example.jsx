import React, { useState } from 'react';
import Message from './Message';
import openai from 'openai';

openai.apiKey = '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';

function Gpt3Example() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false); // State to toggle input display


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message to the chat
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');

    try {
      const response = await openai.Completion.create({
        engine: 'davinci',
        prompt: `User: ${input}\nRobot:`,
        max_tokens: 50,
      });

      const robotResponse = response.choices[0].text.trim();

      if (robotResponse === '') {
        throw new Error('Empty response from the AI.');
      }

      // Add robot response to the chat
      setMessages([...messages, { text: robotResponse, isUser: false }]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      console.error('API Error Response:', error.response);

      setMessages([...messages, { text: 'Sorry, there was an issue processing your request.', isUser: false }]);
    }
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot">
      <div className="robot-icon" onClick={toggleInput}>
          <img src="https://axeyhon9m8ky.objectstorage.ap-singapore-1.oci.customer-oci.com/n/axeyhon9m8ky/b/UI_Path/o/chatbot.png" alt="Robot Icon" />
        </div>
        {showInput && (
          <form className="input-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button type="submit">Send</button>
          </form>
        )}
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isUser={message.isUser} />
        ))}
     
      </div>
    </div>
  );
}

export default Gpt3Example;
