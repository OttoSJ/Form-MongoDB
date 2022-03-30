import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMessages, reset } from "../features/messages/messageSlice";
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
    dispatch(getAllMessages());
  }, [user, navigate]);

  const arrayMessages = [...messages];
  const reverseMessages = arrayMessages.reverse();

  return (
    <>
      <div className="outter-message-container test1 mt-4 ">
        <div className="message-container-bo-->">
          <section className="inner-message-container  mt-5">
            {reverseMessages.map((message) => (
              <MessageCards key={message._id} message={message} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default Messages;
