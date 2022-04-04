import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMessages, reset } from "../features/messages/messageSlice";
import { getAllUsers } from "../features/followers/allUsersSlice";
import Button from "react-bootstrap/Button";

function FindUsers() {
  const [query, setQuery] = useState("");
  const [followUser, setFollowUser] = useState({});

  const { user } = useSelector((state) => state.auth);
  const { allUsers } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getAllUsers());
  }, [user, navigate]);

  const handleSearch = (e, search) => {
    e.preventDefault();
    setQuery(search);
  };

  const handlefollow = (e, followedUser) => {
    e.preventDefault();

    setFollowUser(followedUser);
    // Display message on the screen that the user is now following the user that was clicked
    //   Wrap navigate in a setTimeOut

    console.log(followUser.username, followUser._id);
    console.log(user.username, user._id);
  };

  return (
    <>
      <h1 className="headings mt-5 header-text ">Find Users Page</h1>
      <main className="container-centered mt-5">
        {allUsers
          ? allUsers
              .filter((filteredUsers) => {
                if (query === "") {
                  return null;
                } else if (
                  filteredUsers.username
                    .toLowerCase()
                    .includes(query.toLowerCase())
                ) {
                  return filteredUsers;
                }
              })
              .map((filteredUsers) => (
                <div
                  onClick={(e) => handlefollow(e, filteredUsers)}
                  key={filteredUsers._id}
                >
                  <p className="text mx-5"> {filteredUsers.username} </p>
                </div>
              ))
          : null}
      </main>

      <footer className="footer mt-5">
        <section>
          <form className="message-form">
            <div className="message-form message-input-container">
              <input
                className="message-input bg-dark"
                type="text"
                placeholder="  Enter your search"
                onChange={(e) => handleSearch(e, e.target.value)}
              />
              <div>
                {/* <button type="submit" className="message-button">
                  Search
                </button> */}
              </div>
            </div>
          </form>
        </section>
      </footer>
    </>
  );
}

export default FindUsers;
