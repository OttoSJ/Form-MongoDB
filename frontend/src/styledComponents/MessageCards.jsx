import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessages } from "../features/messages/messageSlice";

function MessageCards() {
  const { messages, isLoading, message, isError } = useSelector(
    (state) => state.messages
  );
  const dispatch = useDispatch();
  dispatch(getMessages());
  console.log(messages);
  return (
    <div className="message-card">
      <p className="message-text">
        {" "}
        I wonder how this will look when I'm done? I hope it will look ok as I'm
        not really very good at styling you know.
      </p>
      {messages[0]}
    </div>
  );
}

export default MessageCards;
