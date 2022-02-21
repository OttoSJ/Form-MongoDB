const React = require("react");
const Html = require("../html");

function Navbar(data) {
  const linkNames = ["TBD", "TBD", "TBD"];

  return (
    <Html>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
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
                <a href="/users" className="nav-link">
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

// <nav className="navbar navbar-expand-lg navbar-light bg-light ">
// <div className="container">
//   <a className="navbar-brand" href="home">
//     Navbar
//   </a>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-bs-toggle="collapse"
//     data-bs-target="#navbarNav"
//     aria-controls="navbarNav"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div
//     className="collapse navbar-collapse d-flex justify-content-evenly"
//     id="navbarNav"
//   >
//     <ul className="navbar-nav">
//       {linkNames.map((links) => (
//         <li className="nav-item mx-3">
//           <a className="nav-link " aria-current="page" href="">
//             {links}
//           </a>
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>
// </nav>
