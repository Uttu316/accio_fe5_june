import { LuBotMessageSquare as ChatIcon } from "react-icons/lu";
import { GiCancel as CancelIcon } from "react-icons/gi";
import ChatBox from "../chatBox";
import { useState } from "react";

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const onChatIcon = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <button onClick={onChatIcon}>
        {!isChatOpen && <ChatIcon />}
        {isChatOpen && <CancelIcon />}
      </button>

      {isChatOpen && <ChatBox />}
    </div>
  );
};
export default ChatWidget;
