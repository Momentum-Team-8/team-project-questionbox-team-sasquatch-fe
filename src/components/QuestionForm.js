import React from "react";

export const QuestionForm = () => {
  return (
    <div>
      <form>
        <label>
          Title:
          <input type="text" name="name" />
        </label>
        <textarea>Hello there, this is some text in a text area</textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
