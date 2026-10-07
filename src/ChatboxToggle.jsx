import { useEffect, useState } from "react";

const ChatboxToggle = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Dynamically inject Chatbase config and script
    window.embeddedChatbotConfig = {
      chatbotId: "VLzoh7d-aWPnKjmZHOMvT",
      domain: "www.chatbase.co",
    };

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute("chatbotId", "VLzoh7d-aWPnKjmZHOMvT");
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
      }}
    >
      {/* Big Chat Box Floating Window */}
      {isVisible && (
        <div
          style={{
            width: "380px",
            height: "520px",
            maxWidth: "calc(100vw - 40px)",
            maxHeight: "75vh",
            backgroundColor: "#1e293b",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            overflow: "hidden",
            border: "1px solid #334155",
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

      {/* Hide or See Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={{
          padding: "10px 18px",
          backgroundColor: "#38bdf8",
          color: "#0f172a",
          border: "none",
          borderRadius: "25px",
          fontWeight: "bold",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
        title={isVisible ? "Hide Chat" : "See Chat"}
      >
        <span>{isVisible ? "✕" : "💬"}</span>
        <span>{isVisible ? "Hide Chat" : "Chat with AI"}</span>
      </button>
    </div>
  );
};

export default ChatboxToggle;
