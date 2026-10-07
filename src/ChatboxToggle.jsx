import { useState } from "react";

const ChatboxToggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 99999,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Hide / Show Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          backgroundColor: "#18181b",
          color: "#ffffff",
          fontWeight: "600",
          padding: "10px 14px",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
          border: "1px solid #3f3f46",
          borderRight: "none",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "14px",
        }}
        title={isVisible ? "Hide Chatbox" : "Show Chatbox"}
      >
        <span>{isVisible ? "▶" : "◀"}</span>
        <span>{isVisible ? "Hide Chat" : "Chat with AI"}</span>
      </button>

      {/* Embedded Chatbox Window */}
      {isVisible && (
        <div
          style={{
            width: "380px",
            height: "520px",
            maxWidth: "calc(100vw - 40px)",
            maxHeight: "80vh",
            borderTopRightRadius: "12px",
            borderTopLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            border: "1px solid #27272a",
            backgroundColor: "#000000",
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/VLzoh7d-aWPnKjmZHOMvT"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="ChatBox"
          />
        </div>
      )}
    </div>
  );
};

export default ChatboxToggle;
