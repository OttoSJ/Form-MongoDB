const React = require("react");
const Html = require("../views/html");
const Navbar = require("./layouts/navbar");

const Signup = () => {
  return (
    <Html>
      <Navbar />
      <div className="container">
        <form method="POST" action="/api/users/signup" className="row g-3 mt-3">
          <div className="col-6">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              autoFocus
              type="text"
              className="form-control"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="col-6">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
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
          <div className="col-md-6">
            <label htmlFor="password2" className="form-label">
              Comfirm Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password2"
              id="password2"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="username"
              className="form-control"
              name="username"
              id="username"
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
          <div className="col-6">
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
            <select id="state" name="state" className="form-select">
              <option selected>Choose...</option>
              <datalist id="state-list">
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CT">Connecticut</option>
                <option value="CO">Colorado</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachussets</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
              </datalist>
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
