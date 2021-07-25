import React, { useState, useEffect } from 'react'
// import { results } from '../Data.js';
import { Link } from 'react-router-dom'
import { getQuestions } from '../api.js'

export const Questions = (props) => {
  const [questions, setQuestions] = useState([])
  const { setSelectedQuestionId } = props
  useEffect(() => {
    getQuestions().then((questions) => setQuestions(questions))
  }, [])

  const handleClick = (e) => {
    setSelectedQuestionId(e.target.id)
  }
  return (
    <div>
      <h1>All questions</h1>
      {questions.map((ask, idx) => {
        return (
          <div key={idx}>
            {/* <button className='button is-info is-rounded' onClick={() => setSelectedQuestion(ask)}>{ask.title}</button> */}
            <Link to={`/questions/${ask.id}`} onClick={handleClick}>
              <h3 id={ask.id}>{ask.title}</h3>
            </Link>
            <p>{ask.body}</p>
            <h4> asked by: {ask.author}</h4>
          </div>
        )
      })}
    </div>
  )
}
