import React from "react";

// This component will needs access to all of the messages in order to render all messages. I'll work on rendering messages of those you follow later on.

function MessageCards() {
  return (
    <div className="message-card">
      <p className="message-text">
        {" "}
        I wonder how this will look when I'm done? I hope it will look ok as I'm
        not really very good at styling you know.
      </p>
    </div>
  );
}

export default MessageCards;
