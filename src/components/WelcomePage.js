import React from "react";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <div class="box">
      <h1>Welcome to Question Box</h1>
      <p>
        Users can post questions they need answered. You can read questions, but
        sign up to post one of your own or answer one!
      </p>
      <Link to="/questions">
        <button
          className="button is-primary"
        >
          View all questions
        </button>
      </Link>
    </div>
  );
};
