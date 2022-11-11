import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import IndexNav from "../../navbars/indexnav";
import "../../../css/forms.css";
import "../../../css/main.css";
import "./register.css";

/**
 * User registrảtion component
 */

class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <IndexNav />
        <div className="container">
          <div className="row">
            <div className="col-md-6 register-left text-center">
              <h1>WELCOME READER</h1>
              <p>We are happy to have you here</p>
            </div>
            <div className="col-md-6">
              <div className="registration-form">
                <legend>Register</legend>
                <form>
                  <div className="error"></div>
                  <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <div className="error"></div>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      placeholder="Enter First Name"
                      name="first_name"
                      required={true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <div className="error"></div>
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      placeholder="Enter Last Name"
                      name="last_name"
                      required={true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="error"></div>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                      name="email"
                      required={true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <div className="error"></div>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter Username"
                      name="username"
                      required={true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="error"></div>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter Password"
                      name="password"
                      required={true}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <div className="error"></div>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      name="confirm_password"
                      required={true}
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
                <p className="member-already">
                  Already a member? <Link to="/login">Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
