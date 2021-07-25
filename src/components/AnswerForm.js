import React, { useState } from "react";


export const AnswerForm = () => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  };
  return (
    <>
      <form>
        <h1>Would you like to contribute an answer to this question?</h1>
        <div>
          <label>
            Type answer :
            <textarea value={text} onChange={handleChange} />
          </label>
        </div>
        <div>
          <p>{text}</p>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </>
  )
};
