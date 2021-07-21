import React, { useState } from "react";

export const Questions = () => {
  const [questions] = useState([
    {
      title: "question title",
      author: "logan",
      body: "this is the full question and full description of my question okay.",
      created_at: "07-21-2021",
      answers: ["O'Reilly"],
    },
    {
      title: "question 2 in the list",
      author: "greg",
      body: "this is the full question and full description of my question okay.",
      created_at: "07-21-2021",
      answers: ["O'Reilly"],
    },
    {
      title: "another question to see",
      author: "sara",
      body: "this is the full question and full description of my question okay.",
      created_at: "07-21-2021",
      answers: ["O'Reilly"],
    },
    {
      title: "help me",
      author: "mr nobody",
      body: "this is the full question and full description of my question okay.",
      created_at: "07-21-2021",
      answers: ["O'Reilly"],
    },
  ]);
  return (
    <div>
      <h1>All questions</h1>
      {questions.map((ask, idx) => {
        return (
          <div>
            <h3>{ask.title}</h3>
            <p>{ask.body}</p>
            <h4> asked by: {ask.author}</h4>
          </div>
        );
      })}
    </div>
  );
};
