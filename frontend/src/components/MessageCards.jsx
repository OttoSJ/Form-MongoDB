import React from "react";

// This component will needs access to all of the messages in order to render all messages. I'll work on rendering messages of those you follow later on.

function MessageCards({ message, user }) {
  return (
    <div className="m-3 ">
      <hr className="message-line-break" />
      <div className="message-container-testing">
        <div>
          <div className="img-div"></div>
        </div>
        <div className=" p-1">
          <p className="message-text ">{user.username} </p>
        </div>
      </div>
      <div className="message-card mt-5">
        <p className="message-text">{message.message}</p>
      </div>
    </div>
  );
}

export default MessageCards;
