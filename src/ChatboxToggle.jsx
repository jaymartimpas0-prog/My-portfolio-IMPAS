import React, { useState } from 'react';

const ChatboxToggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end">
      {/* Hide / Show Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-2 px-3 rounded-l-lg border border-zinc-700 border-r-0 shadow-lg transition-all flex items-center gap-1 text-sm"
        title={isVisible ? "Hide Chatbox" : "Show Chatbox"}
      >
        <span>{isVisible ? '▶' : '◀'}</span>
        <span className="hidden sm:inline">
          {isVisible ? 'Hide Chat' : 'Chat with AI'}
        </span>
      </button>

      {/* Embedded Chatbox Window */}
      {isVisible && (
        <div className="w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] rounded-r-xl rounded-tl-xl overflow-hidden shadow-2xl border border-zinc-800 bg-black transition-all">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/VLzoh7d-aWPnKjmZHOMvT"
            width="100%"
            height="100%"
            frameBorder="0"
            title="ChatBox"
          />
        </div>
      )}
    </div>
  );
};

export default ChatboxToggle;