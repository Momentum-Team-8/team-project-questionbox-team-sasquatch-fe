import React, { useState } from 'react';
import { results } from '../Data.js';

export const Questions = () => {
  const [questions] = useState(results)
  // const [questions, setQuestions] = useState([])
  // const [selectedQuestionTitle, setSelectedQuestionTitle = useState(null)
  // const { questions, title, body, author, setSelectedQuestion } = props
  // useEffect(() => {
  //   getQuestions().then((questions) => setQuestions(questions))
  // }, [])
  return (
    <div>
      <h1>All questions</h1>
      {questions.map((ask, idx) => {
        return (
          <div key={idx}>
            {/* <button className='button is-info is-rounded' onClick={() => setSelectedQuestion(ask)}>{ask.title}</button> */}
            <h3>{ask.title}</h3>
            <p>{ask.body}</p>
            <h4> asked by: {ask.author}</h4>
          </div>
        )
      })}
    </div>
  )
};
