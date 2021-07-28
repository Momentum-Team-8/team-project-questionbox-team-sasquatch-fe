import "./App.css";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { WelcomePage } from "./components/WelcomePage";
import { QuestionForm } from "./components/QuestionForm";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { Questions } from "./components/Questions";
import { QuestionDetail } from "./components/QuestionDetail";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "use-local-storage-state";
import { requestLogout } from "./api";

function App () {
  // Lines 19-27, 55 added for login purposes
  const [email, setEmail] = useLocalStorageState('email', '');
  const [password, setPassword] = useLocalStorageState('password', '')
  const [token, setToken] = useLocalStorageState('token', '');
  const history = useHistory()

  function setAuth (email, password, token) {
    setEmail(email);
    setPassword(password)
    setToken(token);
  }

  const handleLogout = () => {
    requestLogout()
    history.push('/login')
  }

  const isLoggedIn = email && password && token;

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route
            exact
            path="/questions"
            component={() => (
              <Questions handleLogout={handleLogout} />
            )}
          />
          <Route exact path="/questions/qform" component={QuestionForm} token={token} isLoggedIn={isLoggedIn}/>
          <Route
            exact
            path="/questions/:id"
            component={() => (
              <QuestionDetail token={token} isLoggedIn={isLoggedIn}/>
            )}
          /> 
          <Route exact path="/registration" component={Registration} />
          <Route
            exact
            path="/login"
            component={() => (
              <Login setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} />
            )}
          />
          <Route exact path="/profile" component={Profile} token={token} isLoggedIn={isLoggedIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
