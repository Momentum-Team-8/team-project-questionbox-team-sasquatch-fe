import React, { useState } from 'react';
import { results } from '../Data.js';

export const Questions = () => {
  const [questions] = useState(results)
  return (
    <div>
      <h1>All questions</h1>
      {questions.map((ask, idx) => {
        return (
          <div key={idx}>
            <h3>{ask.title}</h3>
            <p>{ask.body}</p>
            <h4> asked by: {ask.author}</h4>
          </div>
        )
      })}
    </div>
  )
};
