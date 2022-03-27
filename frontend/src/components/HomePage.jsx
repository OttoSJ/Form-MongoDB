import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMessages, reset } from "../features/messages/messageSlice";
import Messages from "./Messages";

function HomePage() {
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
    <>
      <div className="headings mt-5">
        <h1>
          <p>HomePage</p>
        </h1>
      </div>
      <Messages />
    </>
  );
}

export default HomePage;
