import "./App.css";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import { WelcomePage } from "./components/WelcomePage";
import { QuestionForm } from "./components/QuestionForm";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import { Questions } from "./components/Questions";
import { QuestionDetail } from "./components/QuestionDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorageState } from "use-local-storage-state";

function App() {
  // Lines 19-27, 55 added for login purposes
  const [username, setUsername] = useLocalStorageState("myAppUsername", "");
  const [token, setToken] = useLocalStorageState("myAppToken", "");

  function setAuth(username, token) {
    setUsername(username);
    setToken(token);
  }

  const isLoggedIn = username && token;

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
              <Questions />
            )}
          />
          <Route exact path="/questions/qform" component={QuestionForm} />
          <Route
            exact
            path="/questions/:id"
            component={() => (
              <QuestionDetail />
            )}
          />
          <Route exact path="/registration" component={Registration} />
          <Route
            exact
            path="/login"
            component={() => (
              <Login setAuth={setAuth} isLoggedIn={isLoggedIn} />
            )}
          />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
