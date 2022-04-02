import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages, reset } from "../features/messages/messageSlice";
import MessageCards from "./MessageCards";
import MessageForm from "../components/MessageForm";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

function Messages() {
  const { user } = useSelector((state) => state.auth);
  const { messages, isLoading, message, isError } = useSelector(
    (state) => state.messages
  );
  const messageEndRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messageEndRef.current.scrollToBottom({ behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getAllMessages());
  }, [user, navigate]);

  // const arrayMessages = [...messages];
  // const reverseMessages = arrayMessages.reverse();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="inner-message-container bg-dark ">
        {messages.map((message) => (
          <MessageCards key={message._id} message={message} user={user} />
        ))}
      </section>
    </>
  );
}

export default Messages;
