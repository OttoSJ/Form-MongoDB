import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { logout, reset } from "../features/auth/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <Nav className=" bg-dark navbar-dark p-3 d-flex justify-content">
        <Nav.Item>
          <Nav.Link href="/" className="navbar-brand">
            Home
          </Nav.Link>
        </Nav.Item>
        {user ? (
          <Nav.Item>
            <Nav.Link href="/dashboard" className="navbar-brand">
              Dashboard
            </Nav.Link>
          </Nav.Item>
        ) : null}

        {!user ? (
          <Nav.Item>
            <Nav.Link href="/register" className="navbar-brand">
              Register
            </Nav.Link>
          </Nav.Item>
        ) : null}

        {!user ? (
          <Nav.Item>
            <Nav.Link href="/login" className="navbar-brand">
              Login
            </Nav.Link>
          </Nav.Item>
        ) : (
          <Nav.Item>
            <Nav.Link onClick={onLogout} className="navbar-brand">
              Logout
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>
    </>
  );
}

export default Navbar;
