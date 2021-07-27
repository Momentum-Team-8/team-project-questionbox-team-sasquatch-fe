import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("Your question has been submitted!");
    axios.post("https://questionbox-sasmothbe.herokuapp.com/api/questions", {
      title: title,
      body: body,
    });
    event.preventDefault();
    setBody("");
    setTitle("");
  };

  return (
    <div class="box is-align-content-space-around">
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Question Form</h1>
        <label class="label">
          Type Question Title:
          <input
            placeholder="Title input"
            type="text"
            value={title}
            onChange={handleChange}
          />
        </label>
        <div class="field">
          <label class="label">Type Question Body: </label>
          <div class="control">
            <textarea class="textarea" placeholder="Type here..."></textarea>
            <p>{body}</p>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" type="submit" value="Submit">
                Submit
              </button>
            </div>
            <div class="control">
              <Link to="/questions">
                <button class="button is-link is-light">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
