import { useEffect, useState } from "react";

const ChatBox = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    //this function get call on mount
    console.log("Chat Box Mounted");

    return () => {
      //cleanup
      // this function get call before unmounting
      console.log("Chatbox unmounting");
    };
  }, []);

  useEffect(() => {
    //this function get call whenever the dependecy array values changes
    console.log("Input changed");
  }, [input]);

  console.log("Chatbox funtion called");

  const onInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h3>I am chat bot</h3>
      <textarea onChange={onInput} placeholder="Type your message here" />
    </div>
  );
};

export default ChatBox;
