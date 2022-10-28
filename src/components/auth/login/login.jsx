import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import IndexNav from "../../navbars/indexnav";
import "./login.css";
import "../../../css/forms.css";
import "../../../css/main.css";
/**
 * Login component
 */

class Login extends Component {

  render() {
    return (
      <React.Fragment>
        <IndexNav />
        <div className="container">
          <div className="row">
            <div className="col-md-6 login-left text-center">
              <h1>WELCOME AVID READER</h1>
              <p>We are happy to have you here</p>
            </div>
            <div className="col-md-6">
              <div className="login-form">
                <legend>Login</legend>
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <br />
                    <span className="error">
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      aria-describedby="emailHelp"
                      placeholder="Enter username"
                      name="username"
                      required={true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <br />
                    <span className="error">
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      name="password"
                      required={true}
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                <p className="no-account">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;