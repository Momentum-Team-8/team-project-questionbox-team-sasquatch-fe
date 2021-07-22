import './App.css';
import { Header } from './components/Header';
import { WelcomePage } from './components/WelcomePage';
import { QuestionForm } from './components/QuestionForm';
import { AnswerForm } from './components/AnswerForm';
import { Registration } from './components/Registration';
import { Questions } from './components/Questions';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App () {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact component={WelcomePage} />
          <Route path='/questions' component={Questions} />
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
