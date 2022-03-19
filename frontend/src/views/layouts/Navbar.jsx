import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav className=" bg-dark navbar-dark p-2">
      <Nav.Item>
        <Nav.Link href="/" className="navbar-brand">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/register" className="navbar-brand">
          Register
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login" className="navbar-brand">
          Login
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
