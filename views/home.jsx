const React = require("react");
const Html = require("./html");
const Navbar = require("./layouts/navbar");

function home() {
  return (
    <Html>
      <Navbar />
      <main className="container">
        <h1>Hello World</h1>
      </main>
    </Html>
  );
}

module.exports = home;
