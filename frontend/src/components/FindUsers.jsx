import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMessages, reset } from "../features/messages/messageSlice";

function FindUsers() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  console.log(user);

  return (
    <div>
      <h1 className="headings mt-5 header-text ">Find Users Page</h1>
    </div>
  );
}

export default FindUsers;
