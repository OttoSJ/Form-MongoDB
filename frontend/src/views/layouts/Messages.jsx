import React from "react";
import MessageCards from "../../styledComponents/MessageCards";

function Messages() {
  return (
    <div className="container-centered mt-4 ">
      <h4>Messages</h4>
      <div className="message-container-border">
        <section className="container-centered mt-5">
          <MessageCards />
        </section>
      </div>
    </div>
  );
}

export default Messages;
