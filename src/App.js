import "./App.css";
import { Header } from "./components/Header";
import { WelcomePage } from "./components/WelcomePage";
import { QuestionForm } from "./components/QuestionForm";
import { AnswerForm } from "./components/AnswerForm";

function App () {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <QuestionForm />
      <AnswerForm />
    </div>
  );
}

export default App;
