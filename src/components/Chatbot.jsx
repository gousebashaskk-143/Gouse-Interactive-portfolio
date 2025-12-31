import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi 👋 Ask me about Gouse!" },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
    ];

    setMessages(newMessages);
    setInput("");

    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: "assistant", content: data.reply },
    ]);
  };

  return (
    <>
      {/* FLOATING CHAT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 99999,
          background: "yellow",
          color: "black",
          padding: "16px 22px",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "50px",
          border: "3px solid black",
          cursor: "pointer",
        }}
      >
        💬 CHAT
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "320px",
            height: "420px",
            background: "white",
            border: "2px solid black",
            borderRadius: "12px",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "10px",
              fontWeight: "bold",
              borderBottom: "1px solid #ccc",
            }}
          >
            Ask Me 🤖
          </div>

          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "14px",
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "8px",
                  textAlign: m.role === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    background:
                      m.role === "user" ? "#cce5ff" : "#f1f1f1",
                  }}
                >
                  {m.content}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              padding: "8px",
              borderTop: "1px solid #ccc",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "6px",
                fontSize: "14px",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                marginLeft: "6px",
                padding: "6px 10px",
                background: "black",
                color: "white",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
