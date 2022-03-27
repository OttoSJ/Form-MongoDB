import React from "react";

// This component will needs access to all of the messages in order to render all messages. I'll work on rendering messages of those you follow later on.

function MessageCards({ message }) {
  return (
    <div className="message-card mt-5">
      <p className="message-text ">{message.message}</p>
    </div>
  );
}

export default MessageCards;
