import { useState } from "react";
import { BsChatDots } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(""); // track input
  const [messages, setMessages] = useState<
    { from: "user" | "ai"; text: string }[]
  >([]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSend = () => {
    if (!message) return;
    setMessages([...messages, { from: "user", text: message }]);

    // Mock AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "This chat is currently unavailable. 😪 Please reach out using the other contact methods provided. I’d love to hear from you.",
        },
      ]);
    }, 800);

    setMessage(""); 
  };

  return (
    <>
      {/* Floating button */}

      <div
        className="fixed bottom-5 animate-bounce right-5 text-center  cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        {" "}
        <p className="text-sm font-[500] mb-1 text-gray-600">Question?</p>
        <div className="bg-[#83b541] p-4 rounded-full shadow-lg w-fit mx-auto">
          <BsChatDots className="text-white text-2xl " />
        </div>
      </div>

   
      {open && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white rounded-sm shadow-lg flex flex-col overflow-hidden z-50">
          <div className="bg-[#83b541] text-white p-3 text-sm  flex justify-between items-center">
            Chat with AI{" "}
            <span className=" !ml-auto font-[600] cursor-pointer">
              <LiaTimesSolid size={20} onClick={handleClose} />
            </span>
          </div>
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2">
            {messages.length === 0 ? (
              <p className="text-xs text-gray-400 text-center mt-10">
                Start a conversation 👋
              </p>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-md text-xs max-w-[80%] ${
                    msg.from === "user"
                      ? "bg-[#83b541]/20 self-end"
                      : "bg-gray-200 self-start leading-loose text-gray-600"
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          <div className="relative p-3 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full border-2 border-[#83b541] rounded px-2 py-2 focus:outline-none focus:ring focus:ring-[#4682A9]/50  "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* Only show send button if input is not empty */}
            {message.trim() !== "" && (
              <IoSendSharp
                className="absolute right-5 top-1/2 -translate-y-1/2 text-[#83b541]   cursor-pointer"
                onClick={handleSend}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
