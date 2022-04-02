import React from "react";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMessages, reset } from "../features/messages/messageSlice";
import Messages from "./Messages";
import MessageForm from "../components/MessageForm";
import Navbar from "../components/Navbar";

function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const { messages, isLoading, message, isError } = useSelector(
    (state) => state.messages
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getMessages());
  }, [user, navigate]);

  return (
    <>
      <div className="homepage-container">
        <div className="headings mt-5">
          {/* Remove this h1 and child once this is ready for production. It's only here as to identify the current page. */}
          {/* <h1 className="">
            <p className="header-text">Message Me Home Page</p>
          </h1> */}
        </div>
        <div className="">
          <Messages />
        </div>
        <footer className="footer ">
          <MessageForm />
        </footer>
      </div>
    </>
  );
}

export default HomePage;
