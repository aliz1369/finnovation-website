// src/components/ChatBubble.tsx
import React, { useState } from "react";

const ChatBubble: React.FC = () => {
    const [message, setMessage] = useState("");

    return (
        <div
            className="
        fixed
        top-1/2
        right-16
        transform
        -translate-y-1/2
        z-50
        flex
        flex-col
        items-center
      "
        >
            {}
            <h2 className="text-blue-600 text-base font-semibold mb-2">
                Merhaba, size nasıl yardımcı olabilirimm?
            </h2>

            {}
            <div
                className="
          relative
          w-[300px]
          bg-white
          shadow-lg
          rounded-[6rem]
          px-9
          py-1
        "
            >
                {}
                <textarea
                    className="
            w-full
            bg-gray-100
            rounded-md
            border
            border-gray-300
            p-2
            text-gray-700
            focus:outline-none
            resize-none
            text-sm
          "
                    rows={1}
                    placeholder="..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {}
                <img
                    src="/chatbot-icon.png"
                    alt="Chatbot Icon"
                    className="
            absolute
            w-16
            h-16
            top-1/2
            right-[-64px]
            transform
            -translate-y-1/2
          "
                />
            </div>
        </div>
    );
};

export default ChatBubble;
