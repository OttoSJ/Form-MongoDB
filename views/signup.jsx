const React = require("react");
const Html = require("../views/html");
const Navbar = require("./layouts/navbar");

const Signup = () => {
  return (
    <Html>
      <Navbar />
      <div className="container">
        <form method="POST" action="/" className="row g-3 mt-3">
          <div className="col-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              autoFocus
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="col-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="inputEmail4"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              placeholder="1234 Main St"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" name="city" id="city" />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select id="state" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="zip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" name="zip" id="zip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Email Me
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Html>
  );
};

module.exports = Signup;
