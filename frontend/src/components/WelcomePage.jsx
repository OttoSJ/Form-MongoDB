import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/homepage");
    }
  }, [user, navigate]);

  return (
    <>
      <div>
        <h1 className="headings mt-5 header-text ">Welcome Page</h1>
      </div>
    </>
  );
}

export default WelcomePage;
