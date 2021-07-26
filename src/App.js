import './App.css';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { WelcomePage } from './components/WelcomePage';
import { QuestionForm } from './components/QuestionForm';
import { Registration } from './components/Registration';
import { Questions } from './components/Questions';
import { QuestionDetail } from './components/QuestionDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getQuestionDetail } from './api';

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
          <Route
            exact
            path='/questions'
            component={() => (
              <Questions setSelectedQuestionId={setSelectedQuestionId} />
            )}
          />
          <Route
            exact
            path='/questions/:id'
            component={() => (
              <QuestionDetail
                selectedQuestion={selectedQuestion}
                setSelectedQuestionid={setSelectedQuestionId}
                loading={loading}
              />
            )}
          />
          <Route exact path='/questions/qform' component={QuestionForm} />
          <Route exact path='/registration' component={Registration} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
