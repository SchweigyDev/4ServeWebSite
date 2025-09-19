import { useState, useEffect } from "react";
import { FaCommentDots, FaTimes } from "react-icons/fa";

interface ChatbotProps {
    embedded?: boolean;
}

const sampleMessages = [
    "Hello! How can I help your business today?",
    "We build AI-integrated websites and smart tools.",
    "Chatbots, blog responders, and automation included!",
];

const Chatbot = ({ embedded = false }: ChatbotProps) => {
    const [open, setOpen] = useState(false);
    const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);

    useEffect(() => {
        if (embedded) {
            let index = 0;
            const interval = setInterval(() => {
                setDisplayedMessages((prev) => [...prev, sampleMessages[index]]);
                index++;
                if (index >= sampleMessages.length) clearInterval(interval);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [embedded]);

    const chatBoxStyle = {
        width: "500px",        // keep wide layout
        maxWidth: "90vw",
        height: "280px",       // shorter height
        background: "rgba(17,17,17,0.9)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        padding: "16px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column" as "column",
        color: "#ddd",
        transform: "translateX(100%)",
        animation: "slideIn 0.8s forwards",
    };

    const messagesContainerStyle = {
        flex: 1,
        overflowY: "auto" as "auto",
        display: "flex",
        flexDirection: "column" as "column",
        gap: "5px",            // less space between messages
        marginBottom: "6px",   // tight gap above input
    };

    const inputStyle = {
        padding: "10px 12px",
        borderRadius: "10px",  // sharper input
        border: "none",
        outline: "none",
        width: "100%",
        boxSizing: "border-box" as "border-box",
    };

    if (embedded) {
        return (
            <div style={chatBoxStyle}>
                <div style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
                    Rivon AI Chat
                </div>
                <div style={messagesContainerStyle}>
                    {displayedMessages.map((msg, i) => (
                        <div
                            key={i}
                            style={{
                                background: i % 2 === 0 ? "#6A00F5" : "rgba(255,255,255,0.08)",
                                color: i % 2 === 0 ? "#fff" : "#ddd",
                                padding: "6px 10px",
                                borderRadius: "6px",  // sharper bubbles
                                fontSize: "0.9rem",
                                maxWidth: "80%",
                                alignSelf: i % 2 === 0 ? "flex-start" : "flex-end",
                                border: i % 2 !== 0 ? "1px solid #6A00F5" : "none",
                                animation: `fadeSlide 0.4s ease forwards`,
                            }}
                        >
                            {msg || "…"}
                        </div>
                    ))}
                </div>
                <input type="text" placeholder="Type your message..." style={inputStyle} />

                <style>
                    {`
                    @keyframes slideIn {
                        from { transform: translateX(100%); opacity: 0; }
                        to { transform: translateX(0); opacity: 1; }
                    }
                    @keyframes fadeSlide {
                        from { opacity: 0; transform: translateX(20px); }
                        to { opacity: 1; transform: translateX(0); }
                    }
                `}
                </style>
            </div>
        );
    }

    // Floating chat button
    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6A00F5, #00D4FF)",
                    border: "none",
                    color: "white",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 200,
                }}
            >
                {open ? <FaTimes /> : <FaCommentDots />}
            </button>

            {open && (
                <div
                    style={{
                        ...chatBoxStyle,
                        transform: "translateX(0)", // fully visible
                        position: "fixed",
                        bottom: "100px",
                        right: "30px",
                        zIndex: 150,
                    }}
                >
                    <div style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "8px" }}>
                        Rivon AI Chat
                    </div>
                    <div style={messagesContainerStyle}>
                        <div
                            style={{
                                background: "#6A00F5",
                                color: "#fff",
                                padding: "6px 10px",
                                borderRadius: "6px",
                                fontSize: "0.9rem",
                                maxWidth: "80%",
                                alignSelf: "flex-start",
                            }}
                        >
                            Hello! How can I help your business today?
                        </div>
                    </div>
                    <input type="text" placeholder="Type your message..." style={inputStyle} />
                </div>
            )}
        </>
    );
};

export default Chatbot;
