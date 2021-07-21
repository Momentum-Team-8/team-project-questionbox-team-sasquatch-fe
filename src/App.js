import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { WelcomePage } from "./components/WelcomePage";
import { QuestionForm } from "./components/QuestionForm";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <QuestionForm />
    </div>
  );
}

export default App;
