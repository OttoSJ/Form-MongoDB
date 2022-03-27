import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessages, reset } from "../features/messages/messageSlice";
import MessageCards from "./MessageCards";
import MessageForm from "../components/MessageForm";
import { useNavigate } from "react-router-dom";

function Messages() {
  const { user } = useSelector((state) => state.auth);
  const { messages, isLoading, message, isError } = useSelector(
    (state) => state.messages
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMessages());
  }, [user, navigate]);

  // if (messages) {
  //   console.log(messages);
  // }
  return (
    <div className="container-centered mt-4 ">
      <h4>Messages</h4>
      <div className="message-container-border">
        <section className="container-centered mt-5">
          {messages.map((message) => (
            <MessageCards key={message._id} message={message} />
          ))}
          {/* <MessageCards messages={messages} /> */}
        </section>
      </div>

      <footer className="footer bg-dark">
        <MessageForm />
      </footer>
    </div>
  );
}

export default Messages;
