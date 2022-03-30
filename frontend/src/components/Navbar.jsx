import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
    dispatch(reset());
  };

  return (
    <>
      <Navbar
        expand="lg"
        className=" bg-dark navbar-dark p-3 d-flex justify-content"
      >
        <Navbar.Brand>Message Me</Navbar.Brand>
        <Navbar.Toggle className="mr-auto" />
        <Navbar.Collapse>
          <Nav className="mr-auto"></Nav>

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
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
