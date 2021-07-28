import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AnswerForm = () => {
  const [text, setText] = useState('')
  const [answer, setAnswer] = useState("");
  let history = useHistory();

  const handleChange = (event) => {
    setText(event.target.value)
  };

  const handleSubmit = (event) => {
    alert("Your answer has been submitted!");
    axios
      .post(
        "https://questionbox-sasmothbe.herokuapp.com/api/answers/create/",
        {
          answer: 'answer'
        },
        {
          headers: {
            Authorization: "Token fe4ba9290bbdc508c1bd0369584bc981dbca214e",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response)
        // history.push("/questions");
      });
    event.preventDefault();
    setAnswer("");
  };
  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Would you like to contribute an answer to this question?</h1>
        <div>
          <label>
            Type answer :
            <textarea value={text} onChange={handleChange} />
          </label>
        </div>
        <div>
          <p>{answer}</p>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </>
  )
};
