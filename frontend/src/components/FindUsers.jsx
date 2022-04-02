import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMessages, reset } from "../features/messages/messageSlice";
import { getAllFollowers } from "../features/followers/followersSlice";
import Button from "react-bootstrap/Button";

function FindUsers() {
  const [query, setQuery] = useState("");
  const [followed, setFollowed] = useState("");

  const { user } = useSelector((state) => state.auth);
  const { followers } = useSelector((state) => state.followers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getAllFollowers());
  }, [user, navigate]);

  const handleSearch = (e, search) => {
    e.preventDefault();
    setQuery(search);
  };

  const handlefollow = () => {
    // Display message on the screen that the user is now following the user that was clicked
    //   Wrap navigate in a setTimeOut

    console.log("followed!");
  };

  return (
    <>
      <h1 className="headings mt-5 header-text ">Find Users Page</h1>
      <main className="container-centered mt-5">
        {followers
          ? followers
              .filter((follower) => {
                if (query === "") {
                  return null;
                } else if (
                  follower.username.toLowerCase().includes(query.toLowerCase())
                ) {
                  return follower;
                }
              })
              .map((follower) => (
                <div onClick={handlefollow} key={follower._id}>
                  <p className="text mx-5"> {follower.username} </p>
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
