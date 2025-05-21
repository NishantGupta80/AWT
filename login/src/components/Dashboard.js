import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
      alert("You must be logged in to access the dashboard!");
      navigate("/login");
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  return (
    <div>
      <h2>Welcome to Dashboard</h2>
      {user ? <p>Logged in as: {user.email}</p> : <p>Loading...</p>}
      <button onClick={() => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
