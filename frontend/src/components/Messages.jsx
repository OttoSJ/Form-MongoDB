import React from "react";
import MessageCards from "./MessageCards";
import MessageForm from "../views/layouts/MessageForm";

function Messages() {
  return (
    <div className="container-centered mt-4 ">
      <h4>Messages</h4>
      <div className="message-container-border">
        <section className="container-centered mt-5">
          <MessageCards />
        </section>
      </div>

      <footer className="footer bg-dark">
        <MessageForm />
      </footer>
    </div>
  );
}

export default Messages;
