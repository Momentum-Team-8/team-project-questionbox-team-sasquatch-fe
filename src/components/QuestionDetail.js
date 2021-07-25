import { Link } from "react-router-dom";
import { AnswerForm } from "./AnswerForm";

export const QuestionDetail = (props) => {
  const { selectedQuestion, loading } = props;
  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <div>
          <button>
            <Link to="/questions">Back to all Questions</Link>
          </button>
          <div>
            <div key={selectedQuestion.id}>
              <h3>{selectedQuestion.title}</h3>
              <p>{selectedQuestion.body}</p>
              <h4> asked by: {selectedQuestion.author}</h4>
            </div>
            <div>
              <ul>
                <li>{selectedQuestion.answer}</li>
              </ul>
            </div>
          </div>
          <div>
            <AnswerForm />
          </div>
        </div>
      )}
    </>
  );
};
