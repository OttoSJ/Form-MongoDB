import React from "react";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMessages, reset } from "../features/messages/messageSlice";
import Messages from "./Messages";
import MessageForm from "../components/MessageForm";
import Navbar from "../components/Navbar";

function HomePage() {
  const [newMessages, setnewMessages] = useState({});
  const { user } = useSelector((state) => state.auth);
  const { messages } = useSelector((state) => state.messages);
  const { isSuccess } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const messageRef = useRef(null);

  const scrollIntoView = () => {
    messageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    scrollIntoView();
    if (!user) {
      navigate("/login");
    }
    dispatch(getMessages());
    setnewMessages(messages);
    console.log("Updated");
  }, [user, navigate, newMessages, isSuccess]);

  const handleText = () => {
    if (messageRef.current) {
      scrollIntoView();
    }
  };

  return (
    <>
      <div className="homepage-container">
        <div className="headings mt-5">
          {/* Remove this h1 and child once this is ready for production. It's only here as to identify the current page. */}
          {/* <h1 className="">
            <p className="header-text">Message Me Home Page</p>
          </h1> */}
        </div>
        <div ref={messageRef} className="">
          <Messages />
        </div>
        <footer className="footer ">
          <MessageForm handleText={handleText} />
        </footer>
      </div>
    </>
  );
}

export default HomePage;
