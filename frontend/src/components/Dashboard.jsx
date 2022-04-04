import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // I will need to load users followers onto this dashboard

  useEffect(() => {
    if (!user._id) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="headings mt-5 header-text">
      <h1>
        <p>Dashboard</p>
      </h1>
      <h6>
        <p className="text">
          This is where you will come to choose who you want to talk too
        </p>
      </h6>
    </div>
  );
}

export default Dashboard;
