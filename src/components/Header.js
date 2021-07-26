import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="container">
      <div className="App" class="notification is-black">
        <div class="navbar-start">
          <h1 class="navbar-item">Question Box</h1>
          <Link to="/">
            <a class="navbar-item">
              <i class="fas fa-home"></i> Home
            </a>
          </Link>
          <Link to="/profile">
            <a class="navbar-item">
              <i class="far fa-user"></i> Profile
            </a>
          </Link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field has-addons">
              <div class="buttons" class="field is-grouped">
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Find a question or a topic..."
                  />
                </div>
                <div class="control">
                  <a class="button is-primary">Search</a>
                </div>
              </div>
              <Link to="/registration">
                <a class="button is-light">
                  <strong>Sign up</strong>
                </a>
              </Link>
              <a class="button is-primary">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
