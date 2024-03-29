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
import { useLocalStorageState } from "use-local-storage-state";

function App () {
  const [token, setToken] = useLocalStorageState('token', '');
  const isLoggedIn = token;

  return (
    <Router>
      <div className="App">
        <Header token={token} setToken={setToken} />
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route
            exact
            path="/questions"
            component={() => (
              <Questions isLoggedIn={isLoggedIn} />
            )}
          />
          <Route exact path="/questions/qform" component={() => <QuestionForm token={token} />} />
          <Route
            exact
            path="/questions/:id"
            component={() => (
              <QuestionDetail token={token} />
            )}
          />
          <Route exact path="/registration" component={Registration} />
          <Route
            exact
            path="/login"
            component={() => (
              <Login isLoggedIn={isLoggedIn} token={token} setToken={setToken} />
            )}
          />
          <Route exact path="/profile" component={() => <Profile token={token} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
