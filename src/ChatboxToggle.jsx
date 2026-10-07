import { useState } from "react";

const ChatboxToggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="chatbox-widget-container">
      {/* Embedded Chatbox Window */}
      {isVisible && (
        <div className="chatbox-window">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/VLzoh7d-aWPnKjmZHOMvT"
            width="100%"
            height="100%"
            frameBorder="0"
            title="ChatBox"
          />
        </div>
      )}

      {/* Hide / Show Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="chatbox-toggle-btn"
        title={isVisible ? "Hide Chatbox" : "Show Chatbox"}
        aria-label="Toggle Chatbot"
      >
        {isVisible ? "✕" : "💬"}
      </button>
    </div>
  );
};

export default ChatboxToggle;