const React = require("react");
const Html = require("../html");

function Navbar(data) {
  return (
    <Html>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a href="/api/users" className="navbar-brand">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="users/signup" className="nav-link">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a href="#login" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="#settings" className="nav-link">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Html>
  );
}

module.exports = Navbar;
