import React, { useEffect, useState } from "react";
import { getQuestionDetail } from "../api";

export const QuestionDetail = (props) => {
  const [loading, setLoading] = useState(true);
  const { selectedQuestion, setSelectedQuestion } = props;

  useEffect(() => {
    getQuestionDetail(selectedQuestion).then((data) => {
      setSelectedQuestion(data);
      setLoading(false);
      console.log("useEffect fired");
    });
  }, []);

  return loading ? (
    "Questions are loading"
  ) : (
    <div>
      <button onClick={() => setSelectedQuestion(null)}>
        Back to all Questions
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
    </div>
  );
};
