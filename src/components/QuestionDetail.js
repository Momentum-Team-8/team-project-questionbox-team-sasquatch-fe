import { Link } from 'react-router-dom';
import { AnswerForm } from './AnswerForm';
import { useEffect } from 'react'
import { getQuestionDetail } from '../api';

export const QuestionDetail = (props) => {
  const { selectedQuestion, loading } = props
  const [ selectedQuestion, setSelectedQuestion ] = useEffect
  useEffect(() => {
    getQuestionDetail(selectedQuestionId).then((data) => {
      console.log('useEffect fired')
      setSelectedQuestion(data)
      setLoading(false)
    })
  }, [selectedQuestionId])
  console.log(selectedQuestionId)
  return (
    <>
        <div>
          <button>
            <Link to='/questions'>Back to all Questions</Link>
          </button>
          <div>
            <div key={selectedQuestion.id}>
              <h3>{selectedQuestion.title}</h3>
              <p>{selectedQuestion.body}</p>
              <h4> asked by: {selectedQuestion.user}</h4>
              <p>Category: {selectedQuestion.tags}</p>
            </div>
          </div>
          <h1>Answers: </h1>
          {selectedQuestion.answers.map((answers, idx) => {
            return (
              <div key={idx} class='box'>
                <p>{answers.answer}</p>
                <h4> answered by: {answers.user}</h4>
              </div>
            )
          })}
          <div>
            <AnswerForm />
          </div>
        </div>
    </>
  )
};
