import { Link, useParams } from "react-router-dom";
import { AnswerForm } from "./AnswerForm";
import { useEffect, useState } from "react";
import { getQuestionDetail } from "../api";

export const QuestionDetail = ({ token }) => {
  const { id } = useParams();
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getQuestionDetail(id).then((data) => {
      setSelectedQuestion(data);
      setLoading(false)
    });
  }, [id, selectedQuestion]);
  return loading
    ? 'Question details are loading...'
    : (
      <>
        <div>
          <button>
            <Link to="/questions">Back to all Questions</Link>
          </button>
          <div>
            <div key={selectedQuestion.id}>
              <h3>{selectedQuestion.title}</h3>
              <p>{selectedQuestion.body}</p>
              <h4> asked by: {selectedQuestion.user}</h4>
              <h4> asked on: {selectedQuestion.created_at}</h4>
              {/* <p>Category: {selectedQuestion.tags}</p> */}
            </div>
          </div>
          {selectedQuestion.answers &&
          selectedQuestion.answers.map((answers, idx) => {
            return (
              <div key={idx} class="box">
                <h1>Answer: </h1>
                <p>{answers.answer}</p>
                <h4> answered by: {answers.user}</h4>
              </div>
            );
          })}
          <div>
            <AnswerForm token={token} />
          </div>
        </div>
      </>
      );
};
