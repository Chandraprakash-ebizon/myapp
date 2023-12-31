// Message.js
import React from 'react';

const Message = ({ text, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user' : 'robot'}`}>
      {text}
    </div>
  );
};

export default Message;
