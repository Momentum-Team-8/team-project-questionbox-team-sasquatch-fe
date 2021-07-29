import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getQuestions } from "../api.js";

export const Questions = ({ isLoggedIn }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getQuestions().then((questions) => {
      setQuestions(questions)
      setLoading(false)
    })
  }, []);

  return loading
    ? 'Questions are loading...'
    : (
    <div>
      {isLoggedIn ? (
      <Link to='/questions/qform'>
        <button class="button is-primary is-light"> + Post A Question</button>
      </Link>
      ) : (<></>)}
      <h1>All questions</h1>
      {questions.map((ask, idx) => {
        return (
          <div key={idx} class="box">
            <Link to={`/questions/${ask.id}`}>
              <h3 id={ask.id}>{ask.title}</h3>
            </Link>
            <p>{ask.body}</p>
            <h4> asked by: {ask.user}</h4>
            <h4> asked on: {ask.created_at}</h4>
          </div>
        );
      })}
    </div>
  );
};
