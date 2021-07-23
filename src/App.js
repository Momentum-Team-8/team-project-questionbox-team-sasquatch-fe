import './App.css';
import { Header } from './components/Header';
import { WelcomePage } from './components/WelcomePage';
import { QuestionForm } from './components/QuestionForm';
import { AnswerForm } from './components/AnswerForm';
import { Registration } from './components/Registration';
import { Questions } from './components/Questions';
import { QuestionDetail } from './components/QuestionDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'

function App () {
  const [selectedQuestion, setSelectedQuestion] = useState({})
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={WelcomePage} />
          <Route path='/questions' component={() => <Questions setSelectedQuestion={setSelectedQuestion} />} />
          <Route path='/questions/:id' component={() => <QuestionDetail selectedQuestion={selectedQuestion} />} />
        </Switch>
        {/* <QuestionForm />
        <AnswerForm />
        <Registration /> */}
      </div>
    </Router>
  )
}

export default App

// title={ask.title}
// body={ask.body}
// author={ask.author}
// question={setSelectedQuestion}
