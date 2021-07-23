import React, { useState } from 'react';
import { results } from '../Data.js';
import { Link } from 'react-router-dom';

export const Questions = () => {
  const [questions] = useState(results)
  //   const [questions, setQuestions] = useState([])
  //   const [selectedQuestionTitle, setSelectedQuestionTitle = useState(null)
  //   const { questions, title, body, author, setSelectedQuestion } = props
  //   useEffect(() => {
  //     getQuestions().then((questions) => setQuestions(questions))
  //   }, [])
  return (
    <div>
      <h1>All questions</h1>
      {questions.map((ask, idx) => {
        return (
          <div key={idx}>
            {/* <button className='button is-info is-rounded' onClick={() => setSelectedQuestion(ask)}>{ask.title}</button> */}
            <Link to={`/questions/${ask.id}`}>
              <h3>{ask.title}</h3>
            </Link>
            <p>{ask.body}</p>
            <h4> asked by: {ask.author}</h4>
          </div>
        )
      })}
    </div>
  )
};
