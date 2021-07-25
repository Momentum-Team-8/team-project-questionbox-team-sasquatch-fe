import './App.css'
import { Header } from './components/Header'
import { WelcomePage } from './components/WelcomePage'
import { QuestionForm } from './components/QuestionForm'
import { AnswerForm } from './components/AnswerForm'
import { Registration } from './components/Registration'
import { Questions } from './components/Questions'
import { QuestionDetail } from './components/QuestionDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getQuestionDetail } from './api'

function App () {
  const [selectedQuestionId, setSelectedQuestionId] = useState('')
  const [selectedQuestion, setSelectedQuestion] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log(selectedQuestionId)
    getQuestionDetail(selectedQuestionId).then((data) => {
      console.log(data)
      setSelectedQuestion(data)
      setLoading(false)
    })
  }, [selectedQuestionId])

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route exact path='/questions' component={() => <Questions setSelectedQuestionId={setSelectedQuestionId} />} />
          <Route exact path='/questions/:id' component={() => <QuestionDetail selectedQuestion={selectedQuestion} setSelectedQuestionid={setSelectedQuestionId} loading={loading} />} />
        </Switch>
        <QuestionForm />
        <AnswerForm />
        <Registration />
      </div>
    </Router>
  )
}

export default App

// title={ask.title}
// body={ask.body}
// author={ask.author}
// question={setSelectedQuestion}
