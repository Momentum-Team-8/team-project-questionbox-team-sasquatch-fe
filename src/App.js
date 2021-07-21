import "./App.css";
import { Header } from "./components/Header";
import { WelcomePage } from "./components/WelcomePage";
import { QuestionForm } from "./components/QuestionForm";
import { AnswerForm } from "./components/AnswerForm";
import { Registration } from "./components/Registration";
import { Questions } from "./components/Questions";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <QuestionForm />
      <AnswerForm />
      <Registration />
      <Questions />
    </div>
  );
}

export default App;
