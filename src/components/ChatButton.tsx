import React, { useState } from "react";

const ChatButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div className="fixed bottom-4 right-4">
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="bg-white text-gray-800 px-3 py-2 rounded-full shadow flex items-center space-x-2"
                >
                    <img src="/chatbot-icon.png" alt="Chatbot" className="h-6 w-6" />
                    <span>Merhaba, size nasıl yardımcı olabilirim?</span>
                </button>
            )}

            {open && (
                <div className="bg-white shadow-lg p-4 rounded-lg w-64">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-red-500 float-right font-bold"
                    >
                        X
                    </button>
                    <p className="text-gray-700 mb-2">Mesajınızı yazın:</p>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full h-20 border border-gray-300 rounded p-1 mb-2"
                    />
                    <button
                        onClick={() => alert("Mesajınız: " + message)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                    >
                        Gönder
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatButton;
