import React, { useEffect, useState } from "react";

export const QuestionDetail = (props) => {
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);
  const { selectedQuestion, setSelectedQuestion } = props;

  useEffect(() => {
    getQuestion(selectedQuestion).then((data) => {
      setQuestion(data);
      setLoading(false);
    });
  }, [selectedQuestion]);

  return loading ? (
    "Questions are loading"
  ) : (
    <div>
      <button onClick={() => setSelectedQuestion(null)}>
        Back to all Questions
      </button>
      <div>
        <div key={idx}>
          <h3>{ask.title}</h3>
          <p>{ask.body}</p>
          <h4> asked by: {ask.author}</h4>
        </div>
        <div>
          <ul>
            <li>{ask.answer}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
