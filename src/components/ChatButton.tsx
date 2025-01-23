import React, { useState } from "react";

const ChatButton: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Mesajınızı yazın..."
        className="w-64 h-24 border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      <button
        onClick={() => alert(`Mesajınız: ${message}`)}
        className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Gönder
      </button>
    </div>
  );
};

export default ChatButton;
